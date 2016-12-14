/**
 * @author Cristiana Man, Edilion devs
 */
import {Injectable} from '@angular/core';
import {RequestMethod} from "@angular/http";

import {AppComponent} from "../app.component";
import {GenericFactory} from "./generic.factory";
import {GenericData} from "./generic.data";

import {EComponent} from "./e.component";
import {EContainerComponent} from "../components/generic-container/e-container.component";

import {RequesterService} from "../requester.service";
import {ConfigService} from "../config.service";

var JSONExtractor = require("../../tools/json.extractor.js");

@Injectable()
export class GenericService {

    app: AppComponent;

    componentsJson: any;
    componentsMap: { [key: string]: EComponent } = {};

    constructor(private requester: RequesterService,
                private factory: GenericFactory,
                private configService: ConfigService) {
        factory.setController(this);
    }

    /**
     * @author Edilion devs
     * @param app
     */
    setApp(app: AppComponent) {
        this.app = app;
    }

    /**
     * @author Cristiana Man
     * This method sets the application in the generic service
     * and uses the config.json file to set the initialEndpoint and path to the API
     * @param app
     */
    configAndStart(app: AppComponent) {
        this.setApp(app);
        this.requester.configLoader()
            .then(response => {
                if(response)  {
                    this.configService.configure(response)
                }
                this.requester.setApiUrl(this.configService.getApiUrl());
                this.run(RequestMethod.Get, this.configService.getInitialEndpoint());
            });
    }

    /**
     * @author Cristiana Man
     * This method is called during the execution of a component's onNgInit method and it uses Requester for retrieving data and then runs the json processor
     * @param callback string in the following format "<GET | PUT | POST | DELETE> <API_REQUEST_URL>"
     * @param data optional json object required for PUT, POST, possibly DELETE
     */
    run(method: RequestMethod, callback: string, data?: any): void {
        this.requester.placeRequest(method, callback, data)
            .then(response => this.processResponse(response));
    }

    /**
     * @author Edilion devs
     * @param response
     */
    processResponse(response) {
        if (response.startsWith("redirect")) {
            window.location = response.split("::")[1];
        }
        else {
            this.processJson(JSON.parse(response));
        }
    }

    /**
     * @author Cristiana Man
     * This method configures a map with the components described in jsonData
     * @param jsonData json object containing an array of components
     */
    processJson(jsonData: { components: any }): void {

        this.componentsJson = jsonData;
        var components = jsonData.components;

        for (let id in components) {

            var cmpJson = components[id];
            var cmp = this.find(id);
            if (cmp === undefined) {
                // If not found then create a new instance of the component
                console.log("Creating " + cmpJson.type);
                cmp = this.create(cmpJson.type);

                // Add the instance to the map
                this.componentsMap[id] = cmp;
            }

            // Attempt to find the component if already exists in the map
            if (cmpJson.parentid === 'root') {
                console.log("Setting layout in master");
                this.app.setLayout(cmp);
            } else {
                var container = this.find(cmpJson.parentid);
                (<EContainerComponent>container).placeChild(cmpJson.placement, cmp);
            }

            // Configure component's data
            this.configure(cmp, cmpJson);

        }
    }

    /**
     * @author Cristiana Man
     * This method looks into the local map (cache) for the component with specified id.
     * @param id component id
     * @return GenericData representing the component's data structure
     */
    find(id: string): EComponent {
        return this.componentsMap[id];
    }

    /**
     * @author Cristiana Man
     * This method uses the GenericFactory to create an instance of a component with a certain type
     * @param type string which the GenericFactory knows how to interpret representing a kind of component
     * @returns instance of GenericComponent
     */
    create(type: string): EComponent {
        return this.factory.createInstance(type);
    }

    /**
     * @author Cristiana Man
     * This method configures a component with its corresponding data
     * @param component
     * @param data
     */
    configure(component: EComponent, data: any): void {
        component.configure(data);
    }

    /**
     * @author Edilion devs
     * When a User interacts with the app, a component may trigger a number of actions.
     * This method determines whether a component defines actions then runs all existing actions.
     * @param json object representation of the json passed for configuring the component triggered.
     */
    processAction(json, data? :any) {
        let cmp = json.data;

        // Backward compatibility. Checks whether there is a single action configuration.
        // Instead a component should define an ActionList with 1 item.
        this.runAction(cmp);

        if (cmp.actions) {
            for(let action of cmp.actions) {
                this.runAction(action);
            }
        }
    }

    /**
     * @author Edilion devs
     * Identifies and runs the action defined by cmp
     * @param cmp an object defining one of externalAction, clientAction, serverAction
     */
    runAction(cmp) {
        if (cmp.externalAction) {
            // Navigates to the URL (externalAction) of an external website
            window.location.href = cmp.externalAction;
        }
        if (cmp.clientAction) {
            // Process json structure defined by the clientAction property
            this.processJson(cmp.clientAction);
        }
        if (cmp.serverAction) {
            this.runServerAction(cmp.serverAction);
        }
    }

    /**
     * @author Edilion devs
     * @param action
     */
    runServerAction(action : any) {
        var method = this.getRequestMethod(action.method);
        var endpoint = action.endpoint;
        var data = this.processActionOutput(action);
        if (!method && !endpoint) {
            method = this.getRequestMethod("GET");
            endpoint = action;
        }
        this.run(method, endpoint, data);
    }

    /**
     * @author Edilion devs
     * @param method
     * @returns {RequestMethod}
     */
    getRequestMethod(method) {
        switch (method) {
            case "GET": return RequestMethod.Get;
            case "POST": return RequestMethod.Post;
            default: return RequestMethod.Get;
        }
    }

    /**
     * @author Edilion devs
     * @param action
     * @returns {any}
     */
    processActionOutput(action) {
        if (action.output) {
            var outputTmpl = action.output;
            var regex = /<[^>]*>/;
            var match;
            while ((match = regex.exec(outputTmpl)) !== null) {
                console.log(match);
                var path = match[0].replace(/(<|>)/g, "");
                var cmpId = path.split(/\./g)[2];
                var outputCmp = this.find(cmpId);
                outputCmp.prepareJson();
                this.componentsJson[cmpId] = outputCmp;
                var value = JSONExtractor.extract(this.componentsJson, path);
                outputTmpl = outputTmpl.replace(match[0], value);
                console.log(outputTmpl);
            }
            return outputTmpl;
        }
        return null;
    }
}

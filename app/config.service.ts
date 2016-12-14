/**
 * Created by Cristiana Man on 05/12/2016.
 */
import {Injectable} from "@angular/core";
import {RequesterService} from "./requester.service";

@Injectable()
export class ConfigService {
    private apiUrl: string;
    private initialEndpoint: string;

    constructor() {
        this.apiUrl =  this.apiUrl = window.location.protocol + "//" + window.location.host + "/a/api/";
        this.initialEndpoint = "gui/frontpage";
    }

    configure(config:any) {
        if (config.apiUrl) this.apiUrl = config.apiUrl;
        if (config.initialEndpoint) this.initialEndpoint = config.initialEndpoint;
        console.log("CONFIG", this.apiUrl, this.initialEndpoint);
    }

    getApiUrl() : string {
        return this.apiUrl;
    }

    getInitialEndpoint() : string {
        return this.initialEndpoint;
    }
}

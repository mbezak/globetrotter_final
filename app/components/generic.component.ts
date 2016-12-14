import {ComponentFactory, ViewContainerRef} from "@angular/core";
import {GenericData} from "./generic.data";
import {GenericView} from "./generic.view";
import {GenericService} from "./generic.service";

export class GenericComponent<D extends GenericData, V extends GenericView<D>> {
    data: D;
    activeView : V;
    viewFactory: Promise<ComponentFactory<V>>;
    controller: GenericService;

    constructor(component: {
        controller: GenericService
        data: D,
        factory:  Promise<ComponentFactory<V>>
    }) {
        this.controller = component.controller;
        this.data = component.data;
        this.viewFactory = component.factory;
    }

    createView(target : ViewContainerRef) : Promise<void> {
        return this.getFactory().then((factory) => {
            target.clear();
            this.activeView = target.createComponent(factory, 0).instance;
            this.activeView.setData(this.getData());
            this.activeView.setController(this.controller);
        });
    }

    configure(jsonData : any) : void {
        this.data.configure(jsonData.data);
        this.data.setJson(jsonData);
    }

    prepareJson() : void {
        this.data.prepareJson();
    }

    getFactory() : Promise<ComponentFactory<V>> {
        return this.viewFactory;
    }

    getData() : D {
        return this.data;
    }

}
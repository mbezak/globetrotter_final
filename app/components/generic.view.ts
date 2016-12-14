import {GenericData} from "./generic.data";
import {GenericService} from "./generic.service";

export class GenericView<D extends GenericData> {
    data: D;
    controller: GenericService;

    setData(data : D) : void {
        this.data = data;
    };

    setController(controller: GenericService) {
        this.controller = controller;
    }

    onActionClicked(data? :any) {
        this.controller.processAction(this.data.json, data);
    }
    
}
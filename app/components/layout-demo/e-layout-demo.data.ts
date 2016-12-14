import {EComponent} from "../e.component";
import {GenericContainerData} from "../generic-container/generic-container.data";

export class ELayoutDemoData extends GenericContainerData {

    public containers = new Array();
    editorConfig : any = {
        lineNumbers: true,
        mode: {
            name: "javascript",
            json: true
        }
    };

    configure(data: string[]) {
        this.containers = [];
        for(let placement of data) {
            let container = {
                placement: placement,
                component: null
            }
            this.containers.push(container);
        }
    }

    setChild(placement: string, component: EComponent) {
        for(let container of this.containers) {
            if(container.placement === placement) {
                container.component = component;
            }
        }
    }
}

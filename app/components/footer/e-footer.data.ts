import {EComponent} from "../e.component";
import {GenericContainerData} from "../generic-container/generic-container.data";

export class EFooterData extends GenericContainerData {
    public containers = new Array();
    options : any;

    configure(data:{
        containers: {
            container: string,
            type: string
        }[],
        options?: {
            height?: string
        }
    }) {
        this.containers = [];
        for(let item of data.containers) {
            let container = {
                placement: item.container,
                component: null,
                type: item.type
            }
            this.containers.push(container);
        }
        this.options = {
            height: "60px"
        };
        if(data.options) {
            if(data.options.height) this.options.height = data.options.height;
        }
        console.log("FOOTER OPTIONS", this.options);
    }

    setChild(placement: string, component: EComponent) {
        for(let container of this.containers) {
            if(container.placement === placement) {
                container.component = component;
            }
        }
    }

}
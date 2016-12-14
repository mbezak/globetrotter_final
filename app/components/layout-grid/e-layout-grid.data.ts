import {GenericContainerData} from "../generic-container/generic-container.data";
import {EComponent} from "../e.component";

export class ELayoutGridData extends GenericContainerData {
    containers: any[];
    perRow: number;

    configure(data: {
        containers: string[],
        perRow: number
    }):void {
        this.containers = [];
        for(let placement of data.containers) {
            let container = {
                placement: placement,
                component: null
            }
            this.containers.push(container);
        }
        this.perRow = data.perRow;
    }

    setChild(placement: string, component: EComponent) {
        for(let container of this.containers) {
            if(container.placement === placement) {
                container.component = component;
            }
        }
    }
}

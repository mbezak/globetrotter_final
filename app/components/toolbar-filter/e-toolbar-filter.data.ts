import {EComponent} from "../e.component";
import {GenericContainerData} from "../generic-container/generic-container.data";

export class EToolbarFilterData extends GenericContainerData {
    public containers = new Array();

    configure(data: string[]): void {
        this.containers = [];

        for(let placement of data) {
            let container = {
                placement: placement,
                component: null,
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
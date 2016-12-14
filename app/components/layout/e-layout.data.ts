import {EComponent} from "../../genericframework/e.component";
import {GenericContainerData} from "../../genericframework/generic-container/generic-container.data";

export class ELayoutData extends GenericContainerData {

    public containers = new Array();

    configure(data: string[]) {
        this.containers = [];
        for (let placement of data) {
            let container = {
                placement: placement,
                component: null
            }
            this.containers.push(container);
        }
        while(this.containers.length < 9) {
            let container = {
                placement: this.containers.length + "",
                component: null
            }
            this.containers.push(container);
        }
    }

    setChild(placement: string, component: EComponent) {
        for (let container of this.containers) {
            if (container.placement === placement) {
                container.component = component;
            }
        }
    }

    getCenterSize(): number {
        var count = 0;
        for (let container of this.containers) {
            if (container.placement === 'east' || container.placement === 'west') {
                if (container.component) count++;
            }
        }
        return count;
    }
}
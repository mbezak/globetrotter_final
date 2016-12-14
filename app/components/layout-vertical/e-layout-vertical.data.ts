/**
 * @author Cristiana Man
 */
import {GenericContainerData} from "../../genericframework/generic-container/generic-container.data";
import {EComponent} from "../../genericframework/e.component";

export class ELayoutVerticalData extends GenericContainerData {
    containers: any[];

    configure(data: string[]):void {
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
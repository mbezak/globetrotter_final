/**
 * @author Cristiana Man
 */
import {EComponent} from "../../genericframework/e.component";
import {GenericContainerData} from "../generic-container/generic-container.data";

export class ESwiperData extends GenericContainerData {
    containers: any[];
    options: any;

    configure(data: {
        containers: {
            container: string,
            active?: boolean
        }[],
        options?: any //TODO add structure
    }): void {

        this.containers = [];
        for(let item of data.containers) {
            let active = (item.active)? item.active : false;
            let container = {
                placement: item.container,
                component: null,
                active: item.active
            }
            this.containers.push(container);
        }

        if (data.options) {
            this.options = data.options;
        } else {
            //TODO add defaults
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
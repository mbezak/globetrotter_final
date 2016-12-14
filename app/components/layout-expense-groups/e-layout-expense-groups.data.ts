import {GenericContainerData} from "../generic-container/generic-container.data";
import {EComponent} from "../e.component";

export class ELayoutExpenseGroupsData extends GenericContainerData {
    containers: any[];

    configure(data: {
        label: string,
        containers: string[]
    }[]) {

        this.containers = [];



        // Iterate the data array and for each element(section) do...
        for(let section of data) {

            // Create a container for the label of the section
            let container = {
                placement: section.label,
                component: null,
                type: "label"
            };
            this.containers.push(container);



            // Create containers for each
            for(let placement of section.containers) {
                let container = {
                    placement: placement,
                    component: null,
                    type: "grid"
                }
                this.containers.push(container);
            }
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
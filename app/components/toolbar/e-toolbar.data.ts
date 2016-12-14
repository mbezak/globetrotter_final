import {EComponent} from "../e.component";
import {GenericContainerData} from "../generic-container/generic-container.data";

export class EToolbarData extends GenericContainerData {
    public containers = new Array();

    configure(data: {
        logo : {
            id: string,
            float: string,
        }[]
        tools : {
            id: string,
            float: string,
        }[]
    }): void {

        this.containers = [];
        for(let tool of data.tools) {
            this.containers.push(this.createContainer(tool, "tool"));
        }
        for(let logoItem of data.logo) {
            this.containers.push(this.createContainer(logoItem, "logoItem"));
        }
    }

    private createContainer(item: any, type: string) : any {
        return {
            placement: item.id,
            float: item.float,
            component: null,
            type: type
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
import {GenericContainerData} from "../../genericframework/generic-container/generic-container.data";
import {EComponent} from "../../genericframework/e.component";

export class EGridData extends GenericContainerData {
    containers: any[];
    columnSize: string;
    containerSize: string;

    configure(data: {
        containers: string[],
        columns: number
    }):void {
        this.containers = [];
        for(let placement of data.containers) {
            let container = {
                placement: placement,
                component: null
            }
            this.containers.push(container);
        }
        this.setColStyles(data.columns);
    }

    setChild(placement: string, component: EComponent) {
        for(let container of this.containers) {
            if(container.placement === placement) {
                container.component = component;
            }
        }
    }

    private setColStyles(columns: number) {
        this.columnSize =  this.getColWidth(columns);
        this.containerSize =  this.getContainerWidth(columns);
    }

    private getColWidth(columns: number) : string {
        let percent = 100 / columns;
        console.log( percent + "%");
        return percent + "%";
    }

    private getContainerWidth(columns: number) : string {
        let percent = 220 * columns;
        console.log( percent + "%");
        return percent + "px";
    }
}

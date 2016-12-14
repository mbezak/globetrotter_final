import {GenericContainerData} from "../generic-container/generic-container.data";
import {EComponent} from "../e.component";

export class EDropdownPanelData extends GenericContainerData {
    trigger: any;
    overlay: any;

    configure(data: {
        trigger: string,
        overlay: string
    }): void {
        this.trigger = {
            placement: data.trigger,
            component: null
        };
        this.overlay = {
            placement: data.overlay,
            component: null
        };
    }

    setChild(panelId: string, component: EComponent) {
        if(this.overlay.placement === panelId) {
            this.overlay.component = component;
        }
        if(this.trigger.placement === panelId) {
            this.trigger.component = component;
        }
    }

}
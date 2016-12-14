import {EComponent} from "../../genericframework/e.component";
import {GenericContainerData} from "../../genericframework/generic-container/generic-container.data";

export class ETabsData extends GenericContainerData {
    tabs: any[];
    options: any;

    configure(data: {
        tabs: {
            id: string,
            title: string,
            active?: boolean
        }[],
        options?: {
            alignment: string
        }
    }): void {
        console.log("TABS data", data);
        this.tabs = data.tabs;
        for (let tab of this.tabs) {
            if (tab.active === null) {
                tab.active = false;
            }
            if (tab.component === null) {
                tab.component = "NOT IMPLEMENTED YET";
            }
        }

        if (data.options) {
            this.options = data.options;
        } else {
            this.options = {
                alignment: "center"
            }
        }
        console.log("TABS Options", this.options);
    }

    setChild(tabId: string, component: EComponent) {
        for (let tab of this.tabs) {
            if (tab.id === tabId) {
                tab.component = component;
            }
        }
    }
}
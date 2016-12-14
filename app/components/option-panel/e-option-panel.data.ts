import {GenericData} from "../generic.data";
export class EOptionPanelData extends GenericData {
    title: string;
    options: any;

    configure(data: {
        title: string,
        options: {
            option: string,
            isChecked: boolean
        }[]
    }): void {
        this.title = data.title;
        this.options = data.options;
    }

}
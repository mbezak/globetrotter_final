import {GenericData} from "../generic.data";

export class EIconData extends GenericData {
    icon: string;

    configure(data: {
        icon: string
    }) : void {
        this.icon = data.icon;
    }
}
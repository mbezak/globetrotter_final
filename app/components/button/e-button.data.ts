import {GenericData} from "../generic.data";

export class EButtonData extends GenericData {
    text : string;
    type: string;

    configure(data: {
        text: string,
        type?: string

    }) : void {
        this.text = data.text;
        this.type = data.type;
    }
}
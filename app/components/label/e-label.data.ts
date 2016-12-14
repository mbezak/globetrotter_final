/**
 * @author Edilion devs
 */
import {GenericData} from "../../genericframework/generic.data";

export class ELabelData extends GenericData {
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
/**
 * @author Matt Bezak
 */
import {GenericData} from "../../genericframework/generic.data";

export class EHeaderData extends GenericData {
    text : string;
    icon : string;
    name : string;

    configure(data: {
        text: string,
        icon: string,
        name: string,
    }) : void {
        this.text = data.text;
        this.icon = data.icon;
        this.name = data.name;
    }
}
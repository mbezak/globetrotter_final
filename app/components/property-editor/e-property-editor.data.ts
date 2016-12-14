/**
 * @author Cristiana Man
 */
import {GenericData} from "../../genericframework/generic.data";

export class EPropertyEditorData extends GenericData {
    fields: any[];
    options: any;

    configure(data: {
        fields? : {
            value?: any,
            id?: string,
            label?: string,
            required?:  boolean,
            default?: string,
            type?: string,
            legalValues?: {
                label? : string,
                value? : string
            }[],
            help?: string,
            isDisabled? : boolean
        }[],
        options? : {
            isHorizontal? : boolean
        }
    }) : void {
        this.fields = data.fields;

        this.options = (data.options) ? data.options : {
            isHorizontal: false
        };

    }

    prepareJson(): void {
        this.json.data.fields = this.fields;
    }

}
import {GenericData} from "../generic.data";
export class ECodeMirrorData extends GenericData {
    text: string;
    mode: string;
    config: any;

    configure(data: {
        text: string,
        mode: string
    }) : void {
        this.text = data.text;
        this.mode = data.mode;
        this.config = {
            lineNumbers: true,
                mode: {
            name: data.mode,
                json: true
            }
        };
    }
}
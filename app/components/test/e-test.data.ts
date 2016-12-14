import {GenericData} from "../generic.data";
export class ETestData extends GenericData {
    data: string;

    configure(data: string):void {
        this.data = data;
    }
}
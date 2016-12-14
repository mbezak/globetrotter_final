/**
 * @author Edilion devs
 */
import {GenericData} from "../../genericframework/generic.data";
export class ETestData extends GenericData {
    data: string;

    configure(data: string):void {
        this.data = data;
    }
}
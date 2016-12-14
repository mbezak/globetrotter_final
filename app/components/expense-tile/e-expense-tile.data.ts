/**
 * @author Teresa Sorbera
 */
import {GenericData} from "../../genericframework/generic.data";

export class EExpenseTileData extends GenericData {
    header : string;
    group: string;

    configure(data : {
        header : string,
        group : string
    }
    ) : void {
        this.header = data.header;
        this.group = data.group;
    }
}

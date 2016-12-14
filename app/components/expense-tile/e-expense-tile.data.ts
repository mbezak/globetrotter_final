import {GenericData} from "../generic.data";

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

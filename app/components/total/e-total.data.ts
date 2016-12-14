import {GenericData} from "../../genericframework/generic.data";

export class ETotalData extends GenericData {
    icon : string;
    header : string;
    currency : string;
    amount : number;


    configure(data : {
        icon : string,
        header : string,
        currency : string,
        amount : number
    }

    ) : void {
        this.icon = data.icon;
        this.header = data.header;
        this.currency = data.currency;
        this.amount = data.amount;
    }
}

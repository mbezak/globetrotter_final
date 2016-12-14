import {GenericData} from "../../genericframework/generic.data";

export class ETimelineExpenseData extends GenericData {
    category: number;
    header : string;
    date: string;
    currency: string;
    amount: number;
    status: number;

    configure(data : {
        category: number,
        header : string,
        date: string,
        currency: string,
        amount: number,
        status: number,
    }
    ) : void {
        this.category = data.category;
        this.header = data.header;
        this.date = data.date;
        this.currency = data.currency;
        this.amount = data.amount;
        this.status = data.status;
    }
}

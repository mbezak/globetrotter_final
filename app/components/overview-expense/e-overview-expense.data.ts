import {GenericData} from "../../genericframework/generic.data";

export class EOverviewExpenseData extends GenericData {
    category: number;
    header : string;
    currency: string;
    amount: number;
    //expenses: any[];



    configure(data : {
        category: number,
        header : string,
        currency: string,
        amount: number
    }//[]
    ) : void {
        this.category = data.category;
        this.header = data.header;
        this.currency = data.currency;
        this.amount = data.amount;
        //this.expenses = data;
    }
}

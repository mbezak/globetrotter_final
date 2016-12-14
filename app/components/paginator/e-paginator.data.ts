import {GenericData} from "../generic.data";
export class EPaginatorData extends GenericData {
    page : number;
    perPage : number;
    items: number;

    configure(data: {
        page : number,
        perPage : number,
        items: number
    }): void {
        this.page = data.page;
        this.perPage = data.perPage;
        this.items = data.items;
    }

    getPages() : number {
        return Math.ceil(this.items / this.perPage);
    }

    getShowingItems() : string {
        let lastInPage = this.page * this.perPage;
        let firstInPage = lastInPage - this.perPage + 1;
        if(lastInPage > this.items) lastInPage = this.items;
        return firstInPage + " - " + lastInPage;
    }
}
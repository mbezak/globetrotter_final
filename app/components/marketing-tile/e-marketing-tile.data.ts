import {GenericData} from "../generic.data";

export class EMarketingTileData extends GenericData {
    title: string;
    message: string;
    containerSize: string;

    configure(data: {
        title: string,
        message: string,
        columns: number
    }):void {
        this.title = data.title;
        this.message = data.message;
        this.containerSize = this.getContainerWidth(data.columns);
    }

    private getContainerWidth(columns: number) : string {
        let percent = 220 * columns - 60;
        console.log( percent + "%");
        return percent + "px";
    }
}
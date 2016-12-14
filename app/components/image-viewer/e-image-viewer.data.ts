import {GenericData} from "../generic.data";
export class EImageViewerData extends GenericData {
    currentPage: number;
    imgPaths: string[];

    configure(data: string[]): void {
        this.imgPaths = data;
        this.currentPage = 1;
    }
}
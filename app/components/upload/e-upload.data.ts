import {GenericData} from "../generic.data";

export class EUploadData extends GenericData {
    message: string;
    document: File;

    configure(data: {
        message: string
    }):void {
        this.message = data.message;
    }
}
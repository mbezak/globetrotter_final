import {GenericData} from "../generic.data";

export class ETileData extends GenericData {
    header: string;
    icon: string;
    image: string;
    message: string;
    isImage: boolean;

    configure(data: {
        header: string,
        icon: string,
        message?: string
    }):void {
        this.header = data.header;
        if(data.icon.startsWith("fa-")) {
            this.icon = data.icon;
            this.isImage = false;
        } else {
            this.image = data.icon;
            this.isImage = true;
        }
        console.log(this.isImage);
        console.log(this.image);
        console.log(this.icon);

        this.message = data.message || '';
    }
}
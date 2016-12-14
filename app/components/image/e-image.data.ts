import {GenericData} from "../generic.data";

export class EImageData extends GenericData {
    image: string;

    configure(data: {
        image: string
    }) : void {
        this.image = data.image;
    }
}
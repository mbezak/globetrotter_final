import {Component} from "@angular/core";
import {GenericView} from "../generic.view";
import {EImageData} from "./e-image.data";


@Component({
    selector: 'e-image',
    template: '<img src="{{data.image}}" (click)="onActionClicked()">'
})
export class EImageView extends GenericView<EImageData> {}
import {Component} from "@angular/core";
import {EIconData} from "./e-icon.data";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-icon',
    template: '<i class="fa" [ngClass]="data.icon" (click)="onActionClicked()"></i>'
})
export class EIconView extends GenericView<EIconData> {}
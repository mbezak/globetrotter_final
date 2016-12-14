import {Component} from "@angular/core";
import {GenericView} from "../../genericframework/generic.view";
import {EHeaderData} from "./e-header.data";

@Component({
    selector: 'e-header',
    template: `
        <div class="e-header">
        <i class="fa" [ngClass]="data.icon" (click)="onActionClicked()"></i>
            <div class="e-text">
                {{data.text}}
            </div>
            <div class="e-name">
                {{data.name}}
                 </div>

        </div>
    `
})
export class EHeaderView extends GenericView<EHeaderData> {}
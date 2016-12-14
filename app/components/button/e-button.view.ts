/**
 * @author Edilion devs
 */
import {Component} from "@angular/core";
import {GenericView} from "../../genericframework/generic.view";
import {EButtonData} from "./e-button.data";

@Component({
    selector: 'e-Button',
    template: `
        <div class="e-button">
            <div (click)="onActionClicked()" class="btn" [ngClass]="{
                'btn-default'   :   data.type === 'default',
                'btn-primary'   :   data.type === 'primary',
                'btn-secondary' :   data.type === 'secondary'
                }">
                {{data.text}}
            </div>
        </div>
    `
})
export class EButtonView extends GenericView<EButtonData> {}
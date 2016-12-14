import {Component} from "@angular/core";
import {GenericView} from "../../genericframework/generic.view";
import {ELabelData} from "./e-label.data";

@Component({
    selector: 'e-label',
    template: `
        <div class="e-text" (click)="onActionClicked()">
            <span [innerHTML]="data.text" 
                [ngClass]="{
                'e-label-error' : data.type === 'error',
                'e-label-warn'  : data.type === 'warn',
                'e-label-info'  : data.type === 'info'
                }">
            
            </span>
        </div>
    `
})
export class ELabelView extends GenericView<ELabelData> {}
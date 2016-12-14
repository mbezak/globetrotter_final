import {Component} from "@angular/core";

import {EFooterData} from "./e-footer.data";
import {EContainerView} from "../generic-container/e-container.view";
import {GenericView} from "../../genericframework/generic.view";

@Component({
    selector: 'e-footer',
    directives: [EContainerView],
    template: `
    <div class="e-footer">
        <div class="e-footer-container">
            <ul class="e-footer-list" [style.height]="data.options.height">
                <li class="e-footer-content" *ngFor="let container of data.containers"
                [ngClass]="{
                    'e-bg-error-gt' : container.type === 'error',
                    'e-bg-info' : container.type === 'info',
                    'e-bg-warn' : container.type === 'warn',
                    'e-bg-ok' : container.type === 'ok',
                    'e-bg-swipe-options' : container.type === 'options'
                }" 
                (click)="onActionClicked()">
                     <e-container [component]="container.component"></e-container>
                </li>   
            </ul>    
        </div>
    </div>    
    `
})
export class EFooterView extends GenericView<EFooterData> {}
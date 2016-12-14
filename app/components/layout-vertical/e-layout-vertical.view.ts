/**
 * @author Cristiana Man
 */
import {Component} from "@angular/core";
import {GenericView} from "../../genericframework/generic.view";
import {ELayoutVerticalData} from "./e-layout-vertical.data";
import {EContainerView} from "../generic-container/e-container.view";



@Component({
    directives: [EContainerView],
    template: `
    <div class="e-vertical-layout-grid">
        <div>
            <div class="e-expense-wrapper">
                 <div *ngFor="let container of data.containers" class="e-layout-vertical-container">
                    <e-container [component]="container.component"></e-container>
                 </div>
            </div>

        </div>
    </div>
    `
})
export class ELayoutVerticalView extends GenericView<ELayoutVerticalData> {
}
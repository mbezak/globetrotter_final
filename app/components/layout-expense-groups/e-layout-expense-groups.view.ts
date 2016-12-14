import {Component} from "@angular/core";
import {GenericView} from "../generic.view";
import {ELayoutExpenseGroupsData} from "./e-layout-expense-groups.data";
import {EContainerView} from "../generic-container/e-container.view";

@Component({
    directives: [EContainerView],
    template: `
    <div class="e-layout-grid">
        <div class="centered">
            <!--<div class = "e-change-view-icon">-->
                <!--<img src="app/resources/img/toggle-short.svg" (click)="changeView()">-->

            <!--</div>-->
            <div *ngFor="let container of data.containers" [ngClass]="{'e-grid-element-short': view, 'e-grid-element-long': !view}"
                [class.e-wide]="container.type==='label'">
               <e-container [component]="container.component"></e-container>
            </div>
        </div>
    </div>
    `,
})
export class ELayoutExpenseGroupsView extends GenericView<ELayoutExpenseGroupsData> {

    view = true;

    changeView() {
        this.view = !this.view;
    }
}

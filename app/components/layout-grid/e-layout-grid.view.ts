import {Component} from "@angular/core";
import {ELayoutGridData} from "./e-layout-grid.data";
import {GenericView} from "../../genericframework/generic.view";
import {EContainerView} from "../generic-container/e-container.view";

@Component({
    selector: 'e-layout-grid',
    directives: [EContainerView],
    template: `
    <div class="e-layout-grid">
        <div class="e-text-center">
            <div *ngFor="let container of data.containers" class="e-grid-element e-grid-margin">
               <e-container [component]="container.component"></e-container>
            </div>
        </div>
    </div>
    `
})
export class ELayoutGridView extends GenericView<ELayoutGridData> {}
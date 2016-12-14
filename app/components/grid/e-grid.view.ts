/**
 * @author Cristiana Man
 */
import {Component} from "@angular/core";
import {EGridData} from "./e-grid.data";
import {GenericView} from "../../genericframework/generic.view";
import {EContainerView} from "../../genericframework/generic-container/e-container.view";

@Component({
    selector: 'e-grid',
    directives: [EContainerView],
    template: `
        <div class="e-grid">
            <div class="e-grid-wrap e-centered" [style.width]="data.containerSize">
                <div *ngFor="let container of data.containers; let i = index" 
                        class="e-grid-cell" 
                        [style.width]="data.columnSize">
                    <div class="e-centered">
                        <e-container [component]="container.component"></e-container>
                    </div>
                </div>
            </div>
        </div>
 
    `
})
export class EGridView extends GenericView<EGridData> {}
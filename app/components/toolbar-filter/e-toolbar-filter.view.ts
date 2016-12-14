import {Component} from "@angular/core";

import {EToolbarFilterData} from "./e-toolbar-filter.data";
import {EContainerView} from "../generic-container/e-container.view";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-toolbar-filter',
    directives: [EContainerView],
    template: `
        <div class="e-toolbar">
            <div class="e-filter-wrap">
                <div *ngFor="let container of data.containers" class="e-filter-content">
                    <e-container [component]="container.component"></e-container>
                </div>
            </div>
        </div>
    `
})
export class EToolbarFilterView extends GenericView<EToolbarFilterData> {}
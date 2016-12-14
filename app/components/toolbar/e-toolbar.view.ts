import {Component} from "@angular/core";

import {EToolbarData} from "./e-toolbar.data";
import {EContainerView} from "../generic-container/e-container.view";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-toolbar',
    directives: [EContainerView],
    template: `
        <div class="e-toolbar">
            
            <div class="e-logo-wrap">
                 <div *ngFor="let container of data.containers" class="e-toolbar-content"
                    [ngClass]="{
                    'e-left'   : container.float === 'left',
                    'e-right'  : container.float === 'right'
                    }">
                    <e-container [hidden]="container.type != 'logoItem'" [component]="container.component"></e-container>
                </div>
            </div>
            <div class="e-tool-wrap">
                <div *ngFor="let container of data.containers" class="e-toolbar-content"
                    [ngClass]="{
                    'e-left'   : container.float === 'left',
                    'e-right'  : container.float === 'right'
                    }">
                    <e-container [hidden]="container.type != 'tool'" [component]="container.component"></e-container>
                </div>
            </div>
            
            
        </div>
    `
})
export class EToolbarView extends GenericView<EToolbarData> {}
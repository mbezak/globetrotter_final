import {Component} from "@angular/core";

import {GenericView} from "../../genericframework/generic.view";
import {ETabsData} from "./e-tabs.data";
import {EContainerView} from "../generic-container/e-container.view";

@Component({
    selector: 'e-tabs',
    directives: [EContainerView],
    template: `
        <div class="e-tabs">
             <div class="e-tab-group">
                <ul class="e-tab-list"
                    [ngClass]="{
                    'e-text-center' : data.options.alignment === 'center',
                    'e-text-left'   : data.options.alignment === 'left',
                    'e-text-right'  : data.options.alignment === 'right'
                    }">
                    <li *ngFor="let tab of data.tabs; let f = first; let l = last" 
                        class="e-tab e-tab-default"  
                        [class.e-tab-first]="f" 
                        [class.e-tab-last]="l" 
                        [class.e-tab-active]="tab.active" 
                        (click)="selectTab(tab)">
                        {{tab.title}}
                    </li>
                </ul>
            </div>
            <div class="e-tab-container">
                <div *ngFor="let tab of data.tabs" [hidden]="!tab.active">
                    <e-container [component]="tab.component"></e-container>
                </div>
            </div>
        </div>
       
    `
})
export class ETabsView extends GenericView<ETabsData> {
    selectTab(tab) {
        this.data.tabs.forEach((t) => t.active = false);
        tab.active = true;
    }
}

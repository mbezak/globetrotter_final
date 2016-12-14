import {Component} from "@angular/core";
import {EDropdownPanelData} from "./e-dropdown-panel.data";
import {GenericView} from "../generic.view";
import {EContainerView} from "../generic-container/e-container.view";

@Component({
    selector: 'e-dropdown-panel',
    directives: [EContainerView],
    template: ` 
    <div class="e-dropdown-panel">
        <div class="dropdown">
            <e-container [component]="data.trigger.component"></e-container>
            
            <div class="dropdown-content">
                <e-container [component]="data.overlay.component"></e-container>
            </div>
        </div>
    </div>
    `
})
export class EDropdownPanelView extends GenericView<EDropdownPanelData> {}
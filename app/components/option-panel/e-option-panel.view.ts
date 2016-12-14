import {Component} from "@angular/core";
import {EOptionPanelData} from "./e-option-panel.data";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-option-panel',
    template: `
    <div class="e-option-panel">
        <div class="dropdown">
            <button class="btn btn-primary">
                <i class="fa fa-cog"></i>
                {{data.title}}
            </button>
            
            <div class="dropdown-content">
                <div *ngFor="let item of data.options" (click)="onOptionClick(item)">
                    <input [(ngModel)]="item.isChecked" type="checkbox"> {{item.option}}
                </div>
            </div>
        </div>
    </div>
    `
})
export class EOptionPanelView extends GenericView<EOptionPanelData> {
    onOptionClick(item) {
        item.isChecked = !item.isChecked;
    }
}
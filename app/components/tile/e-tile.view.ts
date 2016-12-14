import {Component} from "@angular/core";

import {ETileData} from "./e-tile.data";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-tile',
    template: `
    <div class="e-tile" (click)="onActionClicked()">
        <div class="header">
            {{data.header}}
        </div>
        <img [hidden]="!data.isImage" src="{{data.image}}" class="fa-2x">
        <i [hidden]="data.isImage" class="fa" [ngClass]="data.icon"></i>
        <div class="message">
            {{data.message}}
        </div>
    </div>
    `
})
export class ETileView extends GenericView<ETileData> {}
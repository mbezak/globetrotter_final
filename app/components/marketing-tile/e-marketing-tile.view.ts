import {Component} from "@angular/core";

import {EMarketingTileData} from "./e-marketing-tile.data";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-marketing-tile',
    template: `
    <div class="e-grid">
        <div class="e-marketing-tile e-centered" [style.max-width]="data.containerSize">
            <h1 [innerHTML]="data.title" class="title"></h1>
            <p [innerHTML]="data.message"></p>
        </div>
    </div>
    `
})
export class EMarketingTileView extends GenericView<EMarketingTileData> {}
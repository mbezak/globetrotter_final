import { Component } from '@angular/core';

import { ETotalData } from "./e-total.data";
import { GenericView } from "../generic.view";

@Component({
    template: `
    <div class="e-total-bar">
        <div class="e-info">
            <div class="e-icon-container">
                <i class="fa fa-balance-scale"></i>
            </div>

            <div class="e-total-header">{{ data.header }}
            </div>

            <div class="e-total-right">
                <div class="e-total-currency">{{ data.currency }}</div>
                <div class="e-total-amount">{{ data.amount | number:'1.2-2'  }}</div>
            </div>
        </div>
    </div>
    `
})
export class ETotalView extends GenericView<ETotalData> {
}
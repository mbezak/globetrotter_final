/**
 * @author Teresa Sorbera
 */
import { Component } from '@angular/core';

import { EExpenseTileData } from "./e-expense-tile.data";
import { GenericView } from "../../genericframework/generic.view";

@Component({
    template: `
        <div class="e-expense-tile" (click)="onActionClicked()">
            <i class="fa fa-ellipsis-v"></i>
            <img class="receipticon" src="app/resources/img/receipticon3.svg" alt="receipt icon">
            <div class="header">
                {{data.header}}
            </div>
            <p>{{ data.group }}</p>
        </div>
    `
})
export class EExpenseTileView extends GenericView<EExpenseTileData> {}


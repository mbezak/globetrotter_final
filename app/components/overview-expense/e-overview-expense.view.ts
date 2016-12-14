
import { Component } from '@angular/core';

import { EOverviewExpenseData } from "./e-overview-expense.data";
import { GenericView } from "../generic.view";
import {EExpenseCategoryView} from "./../../shared/e-expense-category.view";

@Component({
    directives: [EExpenseCategoryView],
    template: `
        <div class="e-overview-expense" (click)="onActionClicked()">
                            <div class="e-info">
                                <div class="e-expense-category">
                                    <e-expense-category [index]="data.category"></e-expense-category>
                                </div>
                                <div class="e-block-left">
                                    <div class="e-strong">{{ data.header }}</div>
                                </div>
                                <div class="e-block-right">
                                    <div class="e-strong">{{ data.currency }}</div>
                                    <div class="e-normal">{{ data.amount | number:'1.2-2'  }}</div>
                                </div>

                            </div>

        </div>

    `
})
export class EOverviewExpenseView extends GenericView<EOverviewExpenseData> {
}


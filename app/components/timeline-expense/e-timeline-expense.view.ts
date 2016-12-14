import { Component } from '@angular/core';
import { ETimelineExpenseData } from "./e-timeline-expense.data";
import { GenericView } from "../../genericframework/generic.view";
import {EExpenseCategoryView} from "./../../shared/e-expense-category.view";
import {EExpenseStatusView} from "./../../shared/e-expense-status.view";

@Component({
    directives: [EExpenseCategoryView, EExpenseStatusView],
    template: `
        <div class="e-timeline-expense" (click)="onActionClicked()">
            <div class="e-info">
                <div class="e-expense-category">
                    <e-expense-category [index]="data.category"></e-expense-category>
                </div>
                <div class="e-block-left">
                    <div class="e-strong">{{ data.header }}</div>
                    <div class="e-faint">{{ data.date }}</div>
                </div>
                <div class="e-status">
                    <e-expense-status [index]="data.status"></e-expense-status>
                </div>
                <div class="e-block-right">
                    <div class="e-strong">{{ data.currency }}</div>
                    <div class="e-normal">{{ data.amount | number:'1.2-2'  }}</div>
                </div>
            </div>  
        </div>
    `
})
export class ETimelineExpenseView extends GenericView<ETimelineExpenseData> {}



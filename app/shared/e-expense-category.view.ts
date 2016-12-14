import {Component, Input} from "@angular/core";
@Component({
    selector: 'e-expense-category',
    template: `
        <div class="e-expense-category">
            <i class="fa" [ngClass]="getIcon()" aria-hidden="true"></i>
        </div>
    `
})
export class EExpenseCategoryView {
    @Input() index: number;

    getIcon() {
        switch(this.index) {
            case 1: return  'fa-plane';
            case 2: return  'fa-cutlery';
            default: return 'fa-question';
        }
    }
}
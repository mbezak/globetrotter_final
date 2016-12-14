import {Component, Input} from "@angular/core";
@Component({
    selector: 'e-expense-status',
    template: `
        <div class="e-expense-status" [ngClass]="getAlertColor()">
            <i class="fa" [ngClass]="getIcon()" aria-hidden="true"></i>
        </div>
    `
})
export class EExpenseStatusView {
    @Input() index: number;

    getIcon() {
        switch(this.index) {
            case 1: return  'fa-pencil';
            case 2: return  'fa-camera';
            default: return 'fa-check';
        }
    }

    getAlertColor() {
        switch(this.index) {
            case 1: return  'alert';
            case 2: return  'warning';
            default: return 'ok';
        }
    }
}
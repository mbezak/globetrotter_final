import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";
@Component({
    selector: 'e-checkbox',
    template: `
        <label class="control e-checkbox">
            <input type="checkbox" checked="checked" [ngModel]="value"/>
             <div class="e-checkbox-indicator"></div>
        </label>
    `
})
export class ECheckboxView implements OnChanges {
    @Input() value;
    @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnChanges() {
        this.valueChange.emit(this.value);
        console.log(this.value);
    }
}
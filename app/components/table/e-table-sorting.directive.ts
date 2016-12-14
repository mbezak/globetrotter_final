import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: '[eTableSorting]',
    template: `
        <div class="e-theme-primary" (click)="onAscSort()">
            <i *ngIf="column.sort" class="fa fa-chevron-up" ></i>
        </div>
        <div class="e-theme-primary" (click)="onDescSort()">
            <i *ngIf="column.sort"class="fa fa-chevron-down" ></i>
        </div>
    `
})
export class ETableSortingDirective {
    @Input() public eTableSorting:any;
    @Input() public column :any;
    @Output() public sortChanged:EventEmitter<any> = new EventEmitter();

    @Input()
    public get config():any {
        return this.eTableSorting;
    }

    public set config(value:any) {
        this.eTableSorting = value;
    }

    public onAscSort() {
        console.log("clicked ASC");
        if(this.column && this.column.sort === 'desc') {
            this.column.sort = 'asc';
            this.sortChanged.emit(this.column);
        }
    }

    public onDescSort() {
        console.log("clicked DSC");
        if(this.column && this.column.sort === 'asc') {
            this.column.sort = 'desc';
            this.sortChanged.emit(this.column);
        }
    }
}
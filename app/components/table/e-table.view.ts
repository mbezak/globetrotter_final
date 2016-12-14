import { Component } from '@angular/core';
import {ETableData} from "./e-table.data";
import {GenericView} from "../generic.view";
import {ETableSortingDirective} from "./e-table-sorting.directive";
import {RequestMethod} from "@angular/http";
import {ECheckboxView} from "../../shared/e-checkbox.view";

@Component({
    selector: "e-table",
    directives: [ETableSortingDirective, ECheckboxView],
    template: `
        <div class="e-table">
            <table>
                <thead *ngIf="data.options.showHeader">
                    <tr>
                        <th *ngIf="data.options.selectMode === 'multiple'">Select Rows</th>
                        <th *ngFor="let column of data.columns">
                            {{column.header}}
                        </th>
                    </tr>
                     <tr>
                        <th *ngIf="data.options.selectMode === 'multiple'" (click)="onAllChecked()">
                            <input type="checkbox" [ngModel]="data.isAllSelected">
                            <!--<label class="control e-checkbox">-->
                                <!--<input [ngModel]="data.isAllSelected" type="checkbox"/>-->
                                <!--<div class="e-checkbox-indicator"></div>-->
                           <!--</label>-->
                        </th>
                        <th *ngFor="let column of data.columns"
                            [eTableSorting] [column]="column"
                            (sortChanged)="sortByColumn($event)">
                        </th>
                    </tr>
                </thead>
                <tbody>
                 
                    <tr *ngFor="let row of data.rows" (click)="onSelected(row)" [class.active]="row.selected">   
                            <td *ngIf="data.options.selectMode === 'multiple'" (click)="onChecked(row)" [class.e-checked]="row.checked">
                            
                                <input type="checkbox" [ngModel]="row.checked">
                                   <!--<label class="control e-checkbox">-->
                                        <!--<input [ngModel]="row.checked" type="checkbox"/>-->
                                        <!--<div class="e-checkbox-indicator"></div>-->
                                   <!--</label>-->
                                
                            </td>
                            <td *ngFor="let item of row.cells" [class.e-checked]="row.checked">
                            {{item}}
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})
export class ETableView extends GenericView<ETableData> {

    onChecked(row) {
        row.checked = (row.checked) ? false : true;
        this.data.isAllSelected = true;
        this.data.rows.forEach((row) => {
            if(row.checked === false) {
                this.data.isAllSelected = false;
            }
        });
    }

    onAllChecked() {
        this.data.isAllSelected = (this.data.isAllSelected) ? false : true;
        this.data.rows.forEach((row) => row.checked = this.data.isAllSelected);
    }

    // TO FIX
    onSelected(row) {
        this.data.rows.forEach((r) => r.selected = false);
        row.selected = true;
        console.log("ROW WAS CLICKED",row, "CALLBACK", this.data.callback);
        let serverAction = this.data.callback + "/" + row.id;
        console.log(serverAction);
        this.controller.run(RequestMethod.Get, serverAction);
    }

    sortByColumn(column: any) {
        // // Clear column sort for every other column
        // for(let otherColumn of this.data.columns) {
        //     if(column !== otherColumn) {
        //         otherColumn.sort = null;
        //     }
        // }
        var columnIndex = column.index;
        var sortOrder = (column.sort === 'asc') ? 1 : -1;
        this.data.rows = this.data.rows.sort(function(row1, row2) {
            return (row1.cells[columnIndex] > row2.cells[columnIndex]) ? sortOrder : -sortOrder;
        });
    }
}
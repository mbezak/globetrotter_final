import {GenericData} from "../generic.data";
export class ETableData extends GenericData {
    columns: any[];
    rows: any[];
    callback: string;
    options: any;

    isAllSelected: boolean;

    configure(data : {
            columns? : {
                index: number,
                header: string,
                sort? : string,
                show? : boolean
            }[],
            rows? : {
                id: string,
                selected? : boolean,
                cells: string[]
            }[],
            options? : any,
            callback? : string
        }
    ) : void {
        console.log("IN CONFIGURE TABLE DATA", data);
        if(data.callback)   this.callback = data.callback;
        if(data.columns)    {
            this.columns = data.columns;
            this.columns.forEach((column, index) => {
                column.index = index;
            });
        }
        if(data.rows)       {
            this.rows = data.rows;
            this.rows.forEach((row) => {
                row.cells.forEach((cell, index) => {
                   //cell.index = index;
                });
            });
        }
        if(data.options) {
            this.options = data.options;
        } else {
            this.options = {
                showHeader: true,
                selectMode: 'multiple'
            }
        }
    }

    // getVisibleColumns() {
    //     let visibleColumns = [];
    //     this.columns.forEach((column) => {
    //         if(column.show) {
    //             visibleColumns.push(column);
    //         }
    //     });
    //     return visibleColumns;
    // }

    // getVisibleRows() {
    //     let visibleRows = [];
    //     this.rows.forEach((row) => {
    //         let visibleRow = {id: row.id, cells: ["text", "testr", "fdsa"]};
    //         // row.cells.forEach((cell) => {
    //         //     visibleRow.cells.push(cell);
    //         // });
    //         visibleRows.push(visibleRow);
    //     });
    //     return visibleRows;
    //     // return this.rows;
    // }
}

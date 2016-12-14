import {Component} from "@angular/core";

import {GenericView} from "../generic.view";
import {EPaginatorData} from "./e-paginator.data";

@Component({
    selector: 'e-paginator',
    template: `
    <div class="e-paginator">
        <div class="e-row">
            <div class="e-col-m4 e-align-left"> 
                Showing {{data.getShowingItems()}} of {{ data.items }}
            </div>
            <div class="e-col-m4 e-align-center">
                <div [ngClass]="{
                    'e-paginator-block-clickable' : decrementable(),
                    'e-paginator-block-text'      :!decrementable()
                }">
                    <i class="fa fa-fast-backward" (click)="toFirstPage()"></i>
                </div>
                <div [ngClass]="{
                    'e-paginator-block-clickable' : decrementable(),
                    'e-paginator-block-text'      :!decrementable()
                }">
                    <i class="fa fa-step-backward" (click)="decrementPage()"></i>
                </div>
                <div class="e-paginator-block-text"> Page </div>
                <div class="e-paginator-block-page">
                    <input [ngModel]="data.page" (ngModelChange)="setPage($event)" /> 
                </div>
                <div class="e-paginator-block-text"> of </div>
                <div class="e-paginator-block-text"> {{ data.getPages()}} </div>
                <div [ngClass]="{
                    'e-paginator-block-clickable' : incrementable(),
                    'e-paginator-block-text'      :!incrementable()
                }">
                    <i class="fa fa-step-forward" (click)="incrementPage()"></i>
                </div> 
                <div [ngClass]="{
                    'e-paginator-block-clickable' : incrementable(),
                    'e-paginator-block-text'      :!incrementable()
                }">
                    <i class="fa fa-fast-forward" (click)="toLastPage()"></i>
                </div>
            </div>
            <div class="e-col-m4 e-align-right"> 
                <div class="e-paginator-block-text">
                    Items per page  
                </div>
                <div class="e-paginator-block-page">
                    <input [ngModel]="data.perPage" (ngModelChange)="setPerPage($event)" /> 
                </div>
            </div>  
        </div> 
    </div>
   
    `
})
export class EPaginatorView extends GenericView<EPaginatorData> {
    private incrementable() : boolean {
        return this.data.page < this.data.getPages();
    }

    private incrementPage() {
        if (this.incrementable()) {
            this.data.page++;
        }
    }

    private decrementable() : boolean {
        return this.data.page > 1;
    }

    private decrementPage() {
        if (this.decrementable()) {
            this.data.page--;
        }
    }

    private toFirstPage() {
        this.data.page = 1;
    }

    private toLastPage() {
        this.data.page = this.data.getPages();
    }

    private setPage(page) {
        if(page > 0 && page <= this.data.getPages()) {
            this.data.page = page;
        }
    }

    private setPerPage(perPage) {
        if(perPage > 0) {
            this.data.perPage = perPage;
            this.data.page = 1;
        }
    }
}
import {Component} from "@angular/core";

import {GenericView} from "../generic.view";
import {EImageViewerData} from "./e-image-viewer.data";

@Component({
    selector: 'e-image-viewer',
    template: `
        <div class="e-image-viewer">
            <div class="e-pagination">
                <i class="fa fa-chevron-left" (click)="decrementPage()"></i>
                {{data.currentPage}} / {{data.imgPaths.length}}
                <i class="fa fa-chevron-right" (click)="incrementPage()"></i>
            </div>
            <img src="{{data.imgPaths[data.currentPage-1]}}" class="e-page">  
        </div>

    `
})
export class EImageViewerView extends GenericView<EImageViewerData> {
    private incrementPage() {
        if (this.data.currentPage < this.data.imgPaths.length) {
            this.data.currentPage++;
        }
    }
    private decrementPage() {
        if (this.data.currentPage > 1) {
            this.data.currentPage--;
        }

    }
}
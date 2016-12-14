import {Component, Input, ViewChild, ViewContainerRef, OnChanges} from "@angular/core";

@Component({
    selector: 'e-container',
    template: `
        <div #content></div>
    `
})
export class EContainerView implements OnChanges {
    @Input() component: any;
    @ViewChild('content', {read: ViewContainerRef})  protected contentTarget: ViewContainerRef;

    ngOnChanges() {
        let cmp = this.component;
        if(cmp) {
            cmp.createView(this.contentTarget);
        }

    }

}
import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RequestMethod} from "@angular/http";
import {ELayoutView} from "./components/layout/e-layout.view";
import {EComponent} from "./components/e.component";
import {GenericService} from "./components/generic.service";

@Component({
    selector: 'my-app',
    directives: [ELayoutView],
    template: '<div #layout></div>'
})
export class AppComponent implements OnInit {
    @ViewChild('layout', {read: ViewContainerRef})
    protected layoutTarget: ViewContainerRef;

    constructor(private genericController: GenericService) {}

    ngOnInit() {
        this.genericController.configAndStart(this);
    }

    setLayout(component: EComponent) {
        var cmp = component;
        if (cmp) {
            cmp.createView(this.layoutTarget);
        }
    }
}

import { Component } from "@angular/core";
import { GenericView } from "../generic.view";
import { ELayoutDemoData } from "./e-layout-demo.data";
import { EContainerView } from "../generic-container/e-container.view";
import {Codemirror} from 'ng2-codemirror';
import 'codemirror/mode/javascript/javascript';

@Component({
    selector: 'e-layout-demo',
    directives: [EContainerView, Codemirror],
    template: `

    <div class="e-center">
        <h1>Component showcase</h1>
        <div class="e-container">
    
            <div *ngFor="let container of data.containers">
                <div class="e-col-l8">
                    <div class="e-content">
                        <e-container [component]="container.component"></e-container>
                    </div>
                </div>
                <div class="e-col-l4">
                    <div class="e-content">
                        <code>
                            <codemirror [(ngModel)]="container.component.data.json" [config]="data.editorConfig"></codemirror>
                        </code>
                    </div>
                </div>
            </div>
                 
        </div>
    </div>`

})
export class ELayoutDemoView extends GenericView<ELayoutDemoData> {}
import {Component} from "@angular/core";
import {GenericView} from "../generic.view";
import {ECodeMirrorData} from "./e-code-mirror.data";

import {Codemirror} from 'ng2-codemirror';
import 'codemirror/mode/javascript/javascript';

@Component({
    selector: 'e-code-mirror',
    directives: [Codemirror],
    template: `
       <codemirror [(ngModel)]="data.text" [config]="data.config"></codemirror>
    `
})
export class ECodeMirrorView extends GenericView<ECodeMirrorData> {}
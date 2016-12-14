import {Component} from "@angular/core";
import {ETestData} from "./e-test.data";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-test',
    template: `
    <p>{{data.data}}</p>
    `
})
export class ETestView extends GenericView<ETestData> {}
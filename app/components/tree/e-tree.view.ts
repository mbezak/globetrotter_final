import {Component} from "@angular/core";

import {GenericView} from "../generic.view";
import {ETreeData} from "./e-tree.data";
import {ETreeBranchView} from "./e-tree-branch.view";

@Component({
    selector: 'e-tree',
    directives: [ETreeBranchView],
    template: `
        <div class="tree">
            <e-tree-branch  [branch]="data.root"></e-tree-branch>  
        </div>
    `
})
export class ETreeView extends GenericView<ETreeData> {}
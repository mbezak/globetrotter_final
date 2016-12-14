import {Component, Input} from "@angular/core";
import {ETreeBranchData} from "./e-tree-branch.data";

@Component({
    selector: 'e-tree-branch',
    directives: [ETreeBranchView],
    template: `
        <ul>
            <li *ngFor="let b of branch.branches">
                <div class="branch-name" (click)="onBranchClicked(b)">
                <i class="fa" [ngClass]="{
                    'fa-folder-open' : !b.hideContent,
                    'fa-folder'      : b.hideContent
                }"></i>
                {{b.name}}
                </div>
                <div class="branch">
                    <e-tree-branch [branch]="b" [hidden]="b.hideContent"></e-tree-branch>  
                </div>
            </li>
            <li *ngFor="let leaf of branch.leaves">
                {{leaf}}
            </li>
        </ul>
    `
})
export class ETreeBranchView {
    @Input() branch: ETreeBranchData;

    onBranchClicked(branch) {
        branch.hideContent = !branch.hideContent;
    }
}
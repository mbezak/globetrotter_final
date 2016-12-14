import {GenericData} from "../generic.data";
import {ETreeBranchData} from "./e-tree-branch.data";
export class ETreeData extends GenericData {
    root: ETreeBranchData;

    configure(data: string[]): void {
        this.root = new ETreeBranchData("root");
        this.processData(data);
    }

    private processData(data: string[]) {
        for(let item of data) {
            let tokens = item.split("/");
            if(tokens) {
                this.treeGenerator(tokens, 0, this.root);
            }
        }
    }

    private treeGenerator(tokens: string[], index, parentBranch) {
        // Initialize variable with current token.
        let token = tokens[index];
        // If last token, then leaf
        if(index === tokens.length - 1) {
            // GENERATE LEAF
            parentBranch.createLeaf(token);
        } // Else it is a branch
        else {
            // Find branch
            let childBranch = parentBranch.findBranch(token);
            if(!childBranch) {
                // GENERATE BRANCH if not already existing
                childBranch = parentBranch.createBranch(token);
            }
            console.log(childBranch);
            // Generate/Traverse Branch
            this.treeGenerator(tokens, index+1, childBranch);
        }
    }
}
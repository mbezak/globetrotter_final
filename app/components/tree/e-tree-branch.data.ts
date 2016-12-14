export class ETreeBranchData {
    name: string;
    branches: ETreeBranchData[];
    leaves: string[];
    hideContent: boolean;

    constructor(name: string) {
        this.name = name;
        this.branches = new Array();
        this.leaves = new Array();
        this.hideContent = true;
    }

    findBranch(name: string) : ETreeBranchData {
        return this.branches.find(branch => branch.name === name);
    }

    createBranch(name: string) : ETreeBranchData {
        let branch = new ETreeBranchData(name);
        this.branches.push(branch);
        return branch;
    }

    findLeaf(name: string) : string {
        return this.leaves.find(leaf => leaf === name);
    }

    /**
     * Create a new leaf if not already existing
     * @param name string identifying leaf
     */
    createLeaf(name: string) : void {
        if(!this.findLeaf(name)) {
            this.leaves.push(name);
        }
    }

    display() : string {
        return " " + this.name + " = [" + this.branches.forEach(b => b.display()) + ", " + this.leaves.forEach(l => l) + "]";
    }
}
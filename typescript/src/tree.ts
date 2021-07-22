class BinaryTreeNode {

    private left: BinaryTreeNode | null;
    private right: BinaryTreeNode | null;
    private value: number;

    constructor(value: number) { this.value = value; }

    insert = (value: number) => {

        /* Not empty */
        if (this.value) {

            /* Search left */
            if (value < this.value) {
                if (!this.left) { this.left = new BinaryTreeNode(value); }
                else { this.left.insert(value); }
            }

            /* Search right */
            if (value > this.value) {
                if (!this.right) { this.right = new BinaryTreeNode(value); }
                else { this.right.insert(value); }
            }

        } else { this.value = value; }
    }

    log = () => {
        if (this.left) this.left.log();

        console.log(this.value);

        if (this.right) this.right.log();
    }

    // O(log n)
    includes = (value: number) => {
        if (this.value === value) return true;

        /* Search left */
        if (value < this.value) {
            if (!this.left) return false;
            return this.left.includes(value);
        }

        /* Search right */
        if (value > this.value) {
            if (!this.right) return false;
            return this.right.includes(value);
        }
    }

    invert = () => {
        [this.left, this.right] = [this.right, this.left];

        if (this.left) this.left.invert();
        if (this.right) this.right.invert();
    }
}


const binaryTree = new BinaryTreeNode(8);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(4);
binaryTree.insert(3);
binaryTree.insert(25);
binaryTree.insert(14);

console.log('Includes 1:', binaryTree.includes(1)); // false
console.log('Includes 3:', binaryTree.includes(3)); // true
console.log('Includes 15:', binaryTree.includes(15)); // true

binaryTree.log();
console.log();

binaryTree.invert();
binaryTree.log();

class MinHeap {

    private heap = [];
    private size = 0;

    private getLeftChildIndex = (parentIndex: number) => 2 * parentIndex + 1;

    private getRightChildIndex = (parentIndex: number) => 2 * parentIndex + 2;

    private getParentIndex = (childIndex: number) => Math.floor((childIndex - 1) / 2);

    private hasLeftChild = (index: number) => this.getLeftChildIndex(index) < this.size;
    
    private hasRightChild = (index: number) => this.getRightChildIndex(index) < this.size;
    
    private hasParent = (index: number) => this.getParentIndex(index) >= 0;

    private leftChild = (index: number) => this.heap[this.getLeftChildIndex(index)];
    
    private rightChild = (index: number) => this.heap[this.getRightChildIndex(index)];
    
    private parent = (index: number) => this.heap[this.getParentIndex(index)];

    private swap = (index1: number, index2: number) => [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]

    peek = () => this.heap[0];

    pool = () => {
        const first = this.heap[0];
        const last = this.heap[this.heap.length - 1];

        this.heap[0] = last;
        this.heap.pop();

        this.heapDown();
        
        return first;
    }

    add = (item: number) => {
        this.heap.push(item);

        this.heapUp();
    }

    heapDown = () => {
        let index = 0;

        /* Not specific to left child, but if there is no left child, obviously there is no right child. */
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) smallerChildIndex = this.getRightChildIndex(index);

            /* If it is smaller than it's smallest child, it is all done, break. */
            if (this.heap[index] < this.heap[smallerChildIndex]) break;

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    heapUp = () => {
        /* Starts with last index ( last element ) */
        let index = this.heap.length - 1;

        /* While still has parent and is out of order. */
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

}
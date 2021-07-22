class LinkedListNode {

    data_value: string;
    nextNode: LinkedListNode | null;

    constructor(data_value: string) {
        this.data_value = data_value;
        this.nextNode = null;
    }
}


class LinkedList {

    head: LinkedListNode | null;

    constructor(head: LinkedListNode | null) {
        this.head = head;
    }

    insertAtBeginning = (data: string) => {
        const newNode = new LinkedListNode(data);

        newNode.nextNode = this.head;
        this.head = newNode;
    }

    insertAtEnd = (data: string) => {
        const newNode = new LinkedListNode(data);

        let node = this.head;
        while (node.nextNode) { node = node.nextNode; }

        node.nextNode = newNode;
    }

    insertAfterNode = (middleNode: LinkedListNode, data: string) => {
        const newNode = new LinkedListNode(data);

        newNode.nextNode = middleNode.nextNode;
        middleNode.nextNode = newNode;

    }

    logList = () => {
        let node = this.head;

        while (node) {
            console.log(node.data_value);
            node = node.nextNode;
        }
    }

    removeNode = (nodeToRemove: LinkedListNode) => {
        let node = this.head;
        while (node.nextNode !== nodeToRemove) { node = node.nextNode; }

        node.nextNode = nodeToRemove.nextNode;
    }

}


const linkedList = new LinkedList(null);
linkedList.head = new LinkedListNode('Monday');

const node1 = new LinkedListNode('Tuesday');
const node2 = new LinkedListNode('Wednesday');

linkedList.logList(); // Monday
console.log();

linkedList.head.nextNode = node1;
node1.nextNode = node2;

linkedList.logList(); // Monday, Tuesday, Wednesday
console.log();

linkedList.insertAtBeginning('Sunday');

linkedList.logList(); // Sunday, Monday, Tuesday, Wednesday
console.log();

linkedList.insertAfterNode(node2, 'Thursday');

linkedList.logList();
console.log();

linkedList.insertAtEnd('Friday');

linkedList.logList();
console.log();

linkedList.removeNode(node2);

linkedList.logList();
console.log();

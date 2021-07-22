class Node:
    def __init__(self, data_value=None):
        self.data_value = data_value
        self.next_node = None


class LinkedList:
    def __init__(self):
        self.head_value = None

    def print_list(self):
        print_value = self.head_value

        # O(n)
        while print_value is not None:
            print(print_value.data_value)
            print_value = print_value.next_node

    def insert_at_beginning(self, data):
        new_node = Node(data)

        new_node.next_node = self.head_value
        self.head_value = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        last_node = self.head_value

        # Iterate through all nodes, checking if next_node is None
        while last_node.next_node: last_node = last_node.next_node
        
        last_node.next_node = new_node

    def insert_at_middle(self, middle_node, data):
        new_node = Node(data)

        new_node.next_node = middle_node.next_node
        middle_node.next_node = new_node

    def remove_node(self, node_key):
        head_value = self.head_value

        while head_value is not None:

            # It's the node we want to remove
            if head_value.data_value == node_key:
                previous_node.next_node = head_value.next_node
                return

            previous_node = head_value
            head_value = head_value.next_node



if __name__ == '__main__':
    linked_list = LinkedList()

    # Assigning a value to head_value and also an empty next_node
    # value: 'Monday', next_node: None
    linked_list.head_value = Node('Monday')

    # value: 'Tuesday', next_node: None
    node1 = Node('Tuesday')

    # value: 'Wednesday', next_node: None
    node2 = Node('Wednesday')

    # value: 'Monday', next_node: node1
    linked_list.head_value.next_node = node1

    # value: 'Tuesday', next_node: node2
    node1.next_node = node2

    linked_list.print_list()
    print()

    linked_list.insert_at_beginning('Sunday')
    linked_list.print_list()
    print()

    linked_list.insert_at_end('Thursday')
    linked_list.print_list()
    print()

    linked_list.remove_node('Wednesday')
    linked_list.print_list()
    print()

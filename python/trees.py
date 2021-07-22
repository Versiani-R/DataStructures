class Node:

    def __init__(self, value):

        self.left = None
        self.right = None
        self.value = value

    # In order to insert, we must keep the tree balanced
    def insert(self, value):

        if self.value:

            # If it should go to the left
            if value < self.value:

                # Create a new node if it doesn't exist. Use recursion to insert otherwise.
                if self.left is None:
                    self.left = Node(value)
                else:
                    self.left.insert(value)

            # If it should go to the right
            elif value > self.value:

                # Create a new node if it doesn't exist. Use recursion to insert otherwise.
                if self.right is None:
                    self.right = Node(value)
                else:
                    self.right.insert(value)

        else:
            self.value = value

    def print_tree(self):
        if self.left:
            self.left.print_tree()
        
        print(self.value)

        if self.right:
            self.right.print_tree()

    def post_order_traversal(self, root):
        res = []
        if root:
            res = self.post_order_traversal(root.left)
            res += self.post_order_traversal(root.right)
            res.append(root.value)
        return res

    def in_order_traversal(self, root):
        res = []
        if root:
            res = self.in_order_traversal(root.left)
            res.append(root.value)
            res += self.in_order_traversal(root.right)
        return res

    # O(log n)
    def does_element_exists_in_tree(self, value):
        if self.value == value: return True

        # If it should go to the left
        if value < self.value:

            if self.left is None: return False
            return self.left.does_element_exists_in_tree(value)

        # If it should go to the right
        elif value > self.value:

            if self.right is None: return False
            return self.right.does_element_exists_in_tree(value)

    def invert_binary_tree(self, node):
        if not node: return

        node.left, node.right = node.right, node.left

        self.invert_binary_tree(node.left)
        self.invert_binary_tree(node.right)


if __name__ == '__main__':
    root = Node(10)
    root.insert(5)
    root.insert(15)
    root.insert(8)
    # root = Node(27)
    # root.insert(14)
    # root.insert(35)
    # root.insert(10)
    # root.insert(19)
    # root.insert(31)
    # root.insert(42)

    # root.print_tree()
    # print(root.post_order_traversal(root))
    print(root.in_order_traversal(root))


    root.invert_binary_tree(root)
    print(root.in_order_traversal(root))

    # print(root.does_element_exists_in_tree(41))



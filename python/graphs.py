class Graph:

    def __init__(self, graphic_dictionary=None):
        if not graphic_dictionary:
            self.graphic_dictionary = {}

        else:
            self.graphic_dictionary = graphic_dictionary

    def get_vertices(self):
        return list(self.graphic_dictionary.keys())

    # O(n * t), n being length of graphic_dictionary, t being length graphic_dictionary[vertex]
    def get_edges(self):
        edges = []

        for vertex in self.graphic_dictionary:
            for next_vertex in self.graphic_dictionary[vertex]:
                if { next_vertex, vertex } not in edges:
                    edges.append({ vertex, next_vertex })
        
        return edges

    def add_vertex(self, vertex):
        if vertex not in self.graphic_dictionary:
            self.graphic_dictionary[vertex] = []
    
    def add_edge(self, edge):

        (vertex1, vertex2) = tuple(edge)

        if vertex1 in self.graphic_dictionary:
            self.graphic_dictionary[vertex1].append(vertex2)
        else:
            self.graphic_dictionary[vertex1] = [vertex2]


if __name__ == '__main__':
    graph_elements = {
        'a': ['b', 'c'],
        'b': ['a', 'd'],
        'c': ['a', 'd'],
        'd': ['e'],
        'e': ['d'],
    }

    graph = Graph(graph_elements)

    graph.add_edge(('f', 'e'))
    graph.add_edge(('a', 'e'))

    print(graph.get_vertices())
    print(graph.get_edges())

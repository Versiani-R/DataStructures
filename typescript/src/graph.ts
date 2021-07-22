class Graph {

    private graph = {};

    constructor(graph: {}) { this.graph = graph; }

    getVertices = () => Object.keys(this.graph);

    /* O(n * t) */
    getEdges = () => {
        const edges = [];

        for (const vertex in this.graph) {
            for (const nextVertex of this.graph[vertex]) {
                if (!edges.includes({ vertex, nextVertex })) edges.push({ vertex, nextVertex })
            }
        }

        return edges;
    }

    addVertex = (vertex: string) => Object.keys(this.graph).includes(vertex) ? null : this.graph[vertex] = [];

    addEdge = (vertex: string, edge: string) => {

        if (Object.keys(this.graph).includes(vertex)) { this.graph[vertex].push(edge); }
        else { this.graph[vertex] = [edge]; }

    }

}

const graph_elements = {
    'a': ['b', 'c'],
    'b': ['a', 'd'],
    'c': ['a', 'd'],
    'd': ['e'],
    'e': ['d'],
}

const graph = new Graph(graph_elements);

graph.addEdge('a', 'd');

console.log(graph.getVertices());
console.log(graph.getEdges());

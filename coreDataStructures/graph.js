class Node {
    constructor(value) {
        this.value = value
        this.adjacents = []
    }

    addAdjacent(node) {
        if (!this.adjacents.includes(node)) {
            this.adjacents.push(node)
        }
    }

    removeAdjacent(node) {
        const nodeIdx = this.adjacents.indexOf(node)
        if (nodeIdx !== -1) {
            this.adjacents.splice(nodeIdx, 1)
            return node
        }
    }

    getAdjacents() {
        return this.adjacents
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) !== -1
    }
}

// Adjacency list graph. Object oriented implementation.
class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    addNode(node) {
        const nodeInGraph = !!this.nodes.get(node.value)
        if (!nodeInGraph) {
            this.nodes.set(node.value, node)
        }
    }


    addEdge(sourceNode, destinationNode) {
        this.addNode(sourceNode)
        this.addNode(destinationNode)
        sourceNode.addAdjacent(destinationNode)
        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode)
        }
        return [sourceNode, destinationNode]
    }


}

Graph.UNDIRECTED = Symbol('undirected graph'); // two-ways edges
Graph.DIRECTED = Symbol('directed graph'); // one-way edges


// const nodeAU = new Node("aU")
// const nodeBU = new Node("bU")
// const undirectedGraph = new Graph(Graph.UNDIRECTED)
// const [a, b] = undirectedGraph.addEdge(nodeAU, nodeBU)

// const nodeAD = new Node("aD")
// const nodeBD = new Node("bD")
// const directedGraph = new Graph(Graph.DIRECTED)
// const [c, d] = directedGraph.addEdge(nodeAD, nodeBD)
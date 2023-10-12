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

    addNode(value) {
        const nodeInGraph = !!this.nodes.get(value)
        if (!nodeInGraph) {
            const newNode = new Node(value)
            this.nodes.set(value, newNode)
            return newNode
        }
        return nodeInGraph
    }

    addEdge(sourceValue, destinationValue) {
        const sourceNode = this.addNode(sourceValue)
        const destinationNode = this.addNode(destinationValue)
        sourceNode.addAdjacent(destinationNode)
        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.addAdjacent(sourceNode)
        }
        return [sourceNode, destinationNode]
    }

    removeNode(value) {
        const nodeToRemove = this.nodes.get(value)
        if (!nodeToRemove) {
            return null
        }
        for (const node of this.nodes.values()) {
            node.removeAdjacent(nodeToRemove)
        }
        return this.nodes.delete(value)
    }

    removeEdge(sourceValue, destinationValue) {
        const sourceNode = this.nodes.get(sourceValue)
        const destinationNode = this.nodes.get(destinationValue)
        if (!sourceNode || !destinationNode) {
            return null
        }
        sourceNode.removeAdjacent(destinationNode)
        if (this.edgeDirection === Graph.UNDIRECTED) {
            destinationNode.removeAdjacent(sourceNode)
        }
        return [sourceNode, destinationNode]
    }
}

Graph.UNDIRECTED = Symbol('undirected graph'); // two-ways edges
Graph.DIRECTED = Symbol('directed graph'); // one-way edges

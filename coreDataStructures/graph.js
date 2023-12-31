class Node {
    constructor(value) {
        this.value = value
        // can make adjacents a hash set so that removeAdjacent and isAdjacent runs in
        // O(1) time instead of O(e) time, where e = # of edges = length of adjacents
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

    isAdjacent(node) {
        return this.adjacents.indexOf(node) !== -1
    }
}

// Adjacency list graph. Hash Map implementation.
class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    addNode(value) {
        const nodeInGraph = this.nodes.get(value)
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

    breadthFirstSearch(firstNodeValue) {
        const firstNode = this.nodes.get(firstNodeValue)
        if (!firstNode) {
            return null
        }

        const visitedNodes = {}
        const queue = [firstNode]
        while (queue.length) {
            const currentNode = queue.shift()
            visitedNodes[currentNode.value] = true
            queue.push(...currentNode.adjacents.filter(node => !visitedNodes[node.value]))
            console.log(currentNode.value)
        }
    }

    // Can also implement iteratively identically to breadthFirstSearch
    // except with a stack. The order will be reversed DFS, however.
    depthFirstSearch(firstNodeValue, visited = {}) {
        const firstNode = this.nodes.get(firstNodeValue)
        if (!firstNode) {
            return null
        }
        console.log(firstNode.value)
        visited[firstNode.value] = true
        for (const adjacentNode of firstNode.adjacents) {
            if (!visited[adjacentNode.value]) {
                this.depthFirstSearch(adjacentNode.value, visited)
            }
        }
    }

}
Graph.UNDIRECTED = Symbol('undirected graph'); // two-ways edges
Graph.DIRECTED = Symbol('directed graph'); // one-way edges

// TEST CASES
function runGraphTests() {
    console.log("========== TESTS FOR Directed Graph ==========")
    const directedGraph = new Graph(Graph.DIRECTED)
    directedGraph.addNode("a")
    directedGraph.addNode("b")
    directedGraph.addNode("c")
    console.log("Should return nodes a, b, and c in Map: ", directedGraph.nodes)
    directedGraph.addEdge("a", "b")
    console.log("Node 'a' should have adjacency to 'b': ", directedGraph.nodes)
    directedGraph.addEdge("a", "c")
    console.log("Node 'a' should have adjacency to 'c': ", directedGraph.nodes)
    directedGraph.removeNode("c")
    console.log("Node 'a' should have one adjacency to 'b'. 'c' should be gone: ", directedGraph.nodes)
    directedGraph.removeEdge("a", "b")
    console.log("Node 'a' should have no adjacencies: ", directedGraph.nodes)
    console.log("========== TESTS FOR Undirected Graph ==========")
    const undirectedGraph = new Graph(Graph.UNDIRECTED)
    undirectedGraph.addNode("x")
    undirectedGraph.addNode("y")
    undirectedGraph.addNode("z")
    console.log("Should return nodes x, y, and z in Map: ", undirectedGraph.nodes)
    undirectedGraph.addEdge("x", "y")
    console.log("Nodes 'x' and 'y' should have adjacencies to each other: ", undirectedGraph.nodes)
    undirectedGraph.addEdge("x", "z")
    console.log("Nodes 'x' and 'z' should have adjacencies to each other: ", undirectedGraph.nodes)
    undirectedGraph.removeNode("z")
    console.log("Node 'x' should have one adjacency to 'y'. 'z' should be gone: ", undirectedGraph.nodes)
    undirectedGraph.removeEdge("x", "y")
    console.log("Nodes 'x' and 'y' should have no adjacencies: ", undirectedGraph.nodes)
    const searchTestGraph = new Graph(Graph.UNDIRECTED)
    searchTestGraph.addEdge(1, 2)
    searchTestGraph.addEdge(1, 3)
    searchTestGraph.addEdge(1, 4)
    searchTestGraph.addEdge(2, 5)
    searchTestGraph.addEdge(3, 6)
    searchTestGraph.addEdge(3, 7)
    searchTestGraph.addEdge(4, 8)
    searchTestGraph.addEdge(5, 9)
    searchTestGraph.addEdge(6, 10)
    console.log("========== TESTS FOR Graph BFS method ==========")
    console.log("Should print 1 2 3 4 5 6 7 8 9 10")
    searchTestGraph.breadthFirstSearch(1)
    console.log("========== TESTS FOR Graph DFS method ==========")
    console.log("Should print 1, 2, 5, 9, 3, 6, 10, 7, 4, 8")
    dfsFromFirst = searchTestGraph.depthFirstSearch(1)
}
// runGraphTests()
class Node {
    constructor(value) {
        this.value = value
        this.children = []
    }
}

class Tree {
    constructor(node) {
        this.root = node
    }

    insertNode(parentNode, childNode) {
        parentNode.children.push(childNode)
    }

    removeNode(parentNode, childNode) {
        const childNodeIndex = parentNode.children.indexOf(childNode)
        return childNodeIndex > -1 ? parentNode.children.splice(childNodeIndex, 1) : null
    }

    /*
    value 5

    1 4 7
    queue = [{2},{3},{4} {5} {}
                1
            2   3   4
                5   6 7

    */
    depthFirstSearch(value, node = this.root) {
        if (node.value === value) return node
        for (const childNode of node.children) {
            const foundNode = this.depthFirstSearch(value, childNode)
            if (foundNode) return foundNode
        }
        return null
    }

    breadthFirstSearch(value, node = this.root) {
        let queue = [node]
        while (queue.length) {
            const currentNode = queue.shift()
            if (currentNode.value === value) return currentNode
            queue.push(...currentNode.children)
        }
        return null
    }

    getDepth() {
        // ...
    }

    // number of nodes in the level having the greatest number of nodes
    getMaxWidth() {
        // ...
    }
}

// TEST CASES
console.log("========== TESTS FOR insertNode ==========")
const rootNode = new Node(1)
const tree1 = new Tree(rootNode)
console.log("Test 1: ", JSON.stringify(tree1.root) === JSON.stringify({value:1,children:[]}) ? "PASS" : "FAIL")
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
const node7 = new Node(7)
tree1.insertNode(rootNode, node2)
tree1.insertNode(rootNode, node3)
tree1.insertNode(rootNode, node4)
tree1.insertNode(node3, node5)
tree1.insertNode(node4, node6)
tree1.insertNode(node4, node7)
console.log("Test 2: ", JSON.stringify(tree1.root) === JSON.stringify({value:1,children:[{value:2,children:[]},{value:3,children:[{value:5,children:[]}]},{value:4,children:[{value:6,children:[]},{value:7,children:[]}]}]}) ? "PASS" : "FAIL")
console.log("Test 3: ", JSON.stringify(node2) === JSON.stringify({value:2,children:[]}) ? "PASS" : "FAIL")
console.log("Test 4: ", JSON.stringify(node3) === JSON.stringify({value:3,children:[{value:5,children:[]}]}) ? "PASS" : "FAIL")
console.log("Test 5: ", JSON.stringify(node4) === JSON.stringify({value:4,children:[{value:6,children:[]},{value:7,children:[]}]}) ? "PASS" : "FAIL")
console.log("========== TESTS FOR removeNode ==========")
tree1.removeNode(node4, node7)
console.log("Test 6: ", JSON.stringify(node4) === JSON.stringify({value:4,children:[{value:6,children:[]}]}) ? "PASS" : "FAIL")
tree1.removeNode(rootNode, node3)
console.log("Test 7: ", JSON.stringify(tree1.root) === JSON.stringify({value:1,children:[{value:2,children:[]},{value:4,children:[{value:6,children:[]}]}]}) ? "PASS" : "FAIL")
console.log("========== TESTS FOR depthFirstSearch ==========")
console.log("Test 8: ", JSON.stringify(tree1.depthFirstSearch(1)) === JSON.stringify({value:1,children:[{value:2,children:[]},{value:4,children:[{value:6,children:[]}]}]}) ? "PASS" : "FAIL")
console.log("Test 9: ", JSON.stringify(tree1.depthFirstSearch(2)) === JSON.stringify({value:2,children:[]}) ? "PASS" : "FAIL")
console.log("Test 10: ", JSON.stringify(tree1.depthFirstSearch(4)) === JSON.stringify({value:4,children:[{value:6,children:[]}]}) ? "PASS" : "FAIL")
console.log("Test 11: ", JSON.stringify(tree1.depthFirstSearch(6)) === JSON.stringify({value:6,children:[]}) ? "PASS" : "FAIL")
console.log("Test 12: ", JSON.stringify(tree1.depthFirstSearch(7)) === "null" ? "PASS" : "FAIL")
console.log("Test 13: ", JSON.stringify(tree1.breadthFirstSearch(1)) === JSON.stringify({value:1,children:[{value:2,children:[]},{value:4,children:[{value:6,children:[]}]}]}) ? "PASS" : "FAIL")
console.log("Test 14: ", JSON.stringify(tree1.breadthFirstSearch(2)) === JSON.stringify({value:2,children:[]}) ? "PASS" : "FAIL")
console.log("Test 15: ", JSON.stringify(tree1.breadthFirstSearch(4)) === JSON.stringify({value:4,children:[{value:6,children:[]}]}) ? "PASS" : "FAIL")
console.log("Test 16: ", JSON.stringify(tree1.breadthFirstSearch(6)) === JSON.stringify({value:6,children:[]}) ? "PASS" : "FAIL")
console.log("Test 17: ", JSON.stringify(tree1.breadthFirstSearch(7)) === "null" ? "PASS" : "FAIL")

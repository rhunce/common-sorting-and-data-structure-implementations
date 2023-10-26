const Stack = require("./Stack")
const Queue = require("./Queue")

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // O(n log n) time | O(n) space
    // n = number of values
    static buildBST(values) {
        const bST = new BinarySearchTree()
        for (const value of values) {
            bST.insertValue(value)
        }
        return bST
    }

    // O(log n) time | O(1) space
    // n = number of nodes in BST
    insertValue(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this.root
        }
        let currentNode = this.root
        while (currentNode) {
            if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    break
                }
                currentNode = currentNode.right
            } else {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    break
                }
                currentNode = currentNode.left
            }
        }
        return this.root
    }

    // O(log n) time | O(log n) space
    // n = number of nodes in BST
    removeValue(value) {
        const { parent, node } = this.depthFirstSearchRecursive(value)
        if (this._hasNoChildren(node)) {
            if (!parent) {
                this.root = null
                return
            }
            parent.right === node ? parent.right = null : parent.left = null
        } else if (this._hasOneChild(node)) {
            if (!parent) {
                const child = node.left ? node.left : node.right
                this._removeChildren(node)
                this.root = child
                return
            } 
            if (parent.right === node) {
                parent.right = node.left ? node.left : node.right
                this._removeChildren(node)
                return
            } 
            parent.left = node.left ? node.left : node.right
            this._removeChildren(node)
        } else {
            const { parentNextHighestNode, nextHighestNode } = this._getNextHighestNodeAndParent(node)
            node.value = nextHighestNode.value
            if (parentNextHighestNode === node) {
                node.right = nextHighestNode.right
                nextHighestNode.right = null
                return
            }
            parentNextHighestNode.left = nextHighestNode.right
            nextHighestNode.right = null
            return
        }
    }

    // O(n) time | O(log n) space
    // n = number of nodes in BST
    depthFirstSearchRecursive(value, node = this.root, parent = null) {
        if (node.value === value) return { node, parent }
        if (node.left) {
            const targetNode = this.depthFirstSearchRecursive(value, node.left, node)
            if (targetNode) return targetNode
        }
        if (node.right) {
            const targetNode = this.depthFirstSearchRecursive(value, node.right, node)
            if (targetNode) return targetNode
        }
        return null
    }

    // O(n) time | O(log n) space
    // n = number of nodes in BST
    depthFirstSearchIterative(value) {
        if (!this.root) return null
        const stack = new Stack()
        stack.push(this.root)
        while (stack.size()) {
            const currentNode = stack.pop()
            if (currentNode.value === value) return currentNode
            if (currentNode.right) stack.push(currentNode.right)
            if (currentNode.left) stack.push(currentNode.left)
        }
        return null
    }

    // O(n) time | O(n) space
    // n = number of nodes in BST
    breadthFirstSearch(value) {
        if (!this.root) return null
        const queue = new Queue()
        queue.enqueue(this.root)
        while (queue.size()) {
            const currentNode = queue.dequeue()
            if (currentNode.value === value) return currentNode
            if (currentNode.left) queue.enqueue(currentNode.left)
            if (currentNode.right) queue.enqueue(currentNode.right)
        }
        return null
    }

    // O(n) time | O(log n) space
    // n = number of nodes in BST
    inOrderTraversal(node = this.root, values = []) {
        if (node.left) this.inOrderTraversal(node.left, values)
        values.push(node.value)
        if (node.right) this.inOrderTraversal(node.right, values)
        return values
    }

    // O(n) time | O(log n) space
    // n = number of nodes in BST
    preOrderTraversal(node = this.root, values = []) {
        values.push(node.value)
        if (node.left) this.preOrderTraversal(node.left, values)
        if (node.right) this.preOrderTraversal(node.right, values)
        return values
    }

    // O(n) time | O(log n) space
    // n = number of nodes in BST
    postOrderTraversal(node = this.root, values = []) {
        if (node.left) this.postOrderTraversal(node.left, values)
        if (node.right) this.postOrderTraversal(node.right, values)
        values.push(node.value)
        return values
    }

    // O(1) time | O(1) space
    _hasNoChildren(node) {
        return !node.left && !node.right
    }

    // O(1) time | O(1) space
    _hasTwoChildren(node) {
        return node.left && node.right
    }

    // O(1) time | O(1) space
    _hasOneChild(node) {
        return !this._hasNoChildren(node) && !this._hasTwoChildren(node)
    }

    // O(log n) time | O(1) space
    // n = number of nodes in BST
    _getNextHighestNodeAndParent(node) {
        let parentNextHighestNode = node
        let nextHighestNode = node.right
        while (nextHighestNode.left) {
            parentNextHighestNode = nextHighestNode
            nextHighestNode = nextHighestNode.left
        }
        return { parentNextHighestNode, nextHighestNode }
    }

    _removeChildren(node) {
        node.left = null
        node.right = null
    }
}

// TEST CASES
function runBinarySearchTreeTests() {
    console.log("========== TESTS FOR BinarySearchTree ==========")
    console.log("========== TESTS FOR insertValue ==========")
    const bST = new BinarySearchTree()
    bST.insertValue(5)
    bST.insertValue(3)
    bST.insertValue(4)
    bST.insertValue(6)
    bST.insertValue(2)
    bST.insertValue(1)
    bST.insertValue(8)
    bST.insertValue(7)
    bST.insertValue(9)
    console.log("Test 1: ", bST.root.value === 5 ? "PASS" : "FAIL")
    console.log("Test 2: ", bST.root.left.value === 3 ? "PASS" : "FAIL")
    console.log("Test 3: ", bST.root.right.value === 6 ? "PASS" : "FAIL")
    console.log("Test 4: ", bST.root.left.left.value === 2 ? "PASS" : "FAIL")
    console.log("Test 5: ", bST.root.left.right.value === 4 ? "PASS" : "FAIL")
    console.log("Test 6: ", bST.root.left.left.left.value === 1 ? "PASS" : "FAIL")
    console.log("Test 7: ", bST.root.right.right.value === 8 ? "PASS" : "FAIL")
    console.log("Test 8: ", bST.root.right.right.left.value === 7 ? "PASS" : "FAIL")
    console.log("Test 9: ", bST.root.right.right.right.value === 9 ? "PASS" : "FAIL")
    console.log("========== TESTS FOR inOrderTraversal ==========")
    console.log("Test 10: ", JSON.stringify(bST.inOrderTraversal()) === JSON.stringify([1,2,3,4,5,6,7,8,9]) ? "PASS" : "FAIL")
    console.log("========== TESTS FOR preOrderTraversal ==========")
    console.log("Test 11: ", JSON.stringify(bST.preOrderTraversal()) === JSON.stringify([5,3,2,1,4,6,8,7,9]) ? "PASS" : "FAIL")
    console.log("========== TESTS FOR postOrderTraversal ==========")
    console.log("Test 12: ", JSON.stringify(bST.postOrderTraversal()) === JSON.stringify([1,2,4,3,7,9,8,6,5]) ? "PASS" : "FAIL")
    console.log("========== TESTS FOR removeValue ==========")
    const bST2 = BinarySearchTree.buildBST([1,0,2,3])
    console.log("Test 13: ", JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1,0,2,3]) ? "PASS" : "FAIL")
    bST2.removeValue(3)
    console.log("Test 14: ", JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1,0,2]) ? "PASS" : "FAIL")
    bST2.removeValue(0)
    console.log("Test 15: ", JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1,2]) ? "PASS" : "FAIL")
    bST2.removeValue(2)
    console.log("Test 16: ", JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1]) ? "PASS" : "FAIL")
    bST2.removeValue(1)
    console.log("Test 17: ", bST2.root === null ? "PASS" : "FAIL")
    const bST3 = BinarySearchTree.buildBST([5,4,3])
    bST3.removeValue(4)
    console.log("Test 18: ", JSON.stringify(bST3.preOrderTraversal()) === JSON.stringify([5,3]) ? "PASS" : "FAIL")
    const bST4 = BinarySearchTree.buildBST([5,3,4])
    bST4.removeValue(3)
    console.log("Test 19: ", JSON.stringify(bST4.preOrderTraversal()) === JSON.stringify([5,4]) ? "PASS" : "FAIL")
    bST4.removeValue(5)
    console.log("Test 20: ", JSON.stringify(bST4.preOrderTraversal()) === JSON.stringify([4]) ? "PASS" : "FAIL")
    const bST5 = BinarySearchTree.buildBST([5,6,7])
    bST5.removeValue(6)
    console.log("Test 21: ", JSON.stringify(bST5.preOrderTraversal()) === JSON.stringify([5,7]) ? "PASS" : "FAIL")
    const bST6 = BinarySearchTree.buildBST([5,7,6])
    bST6.removeValue(7)
    console.log("Test 22: ", JSON.stringify(bST6.preOrderTraversal()) === JSON.stringify([5,6]) ? "PASS" : "FAIL")
    bST6.removeValue(5)
    console.log("Test 23: ", JSON.stringify(bST6.preOrderTraversal()) === JSON.stringify([6]) ? "PASS" : "FAIL")
    const bST7 = BinarySearchTree.buildBST([70,60,55,65,66,64,63])
    console.log("Test 24: ", JSON.stringify(bST7.preOrderTraversal()) === JSON.stringify([70,60,55,65,64,63,66]) ? "PASS" : "FAIL")
    bST7.removeValue(60)
    console.log("Test 25: ", JSON.stringify(bST7.preOrderTraversal()) === JSON.stringify([70,63,55,65,64,66]) ? "PASS" : "FAIL")
    bST7.insertValue(68)
    bST7.insertValue(67)
    bST7.insertValue(69)
    console.log("Test 26: ", JSON.stringify(bST7.preOrderTraversal()) === JSON.stringify([70,63,55,65,64,66,68,67,69]) ? "PASS" : "FAIL")
    bST7.removeValue(65)
    console.log("Test 27: ", JSON.stringify(bST7.preOrderTraversal()) === JSON.stringify([70,63,55,66,64,68,67,69]) ? "PASS" : "FAIL")
    bST7.insertValue(54)
    bST7.insertValue(56)
    console.log("Test 28: ", JSON.stringify(bST7.preOrderTraversal()) === JSON.stringify([70,63,55,54,56,66,64,68,67,69]) ? "PASS" : "FAIL")
    bST7.removeValue(55)
    console.log("Test 29: ", JSON.stringify(bST7.preOrderTraversal()) === JSON.stringify([70,63,56,54,66,64,68,67,69]) ? "PASS" : "FAIL")
    console.log("========== TESTS FOR depthFirstSearchRecursive ==========")
    const bST8 = BinarySearchTree.buildBST([10,5,3,2,4,7,6,8,15,12,11,13,17,16,18])
    const node7_R = bST8.depthFirstSearchRecursive(7)
    console.log("Test 30: ", node7_R.node.value === 7 ? "PASS" : "FAIL")
    const node18_R = bST8.depthFirstSearchRecursive(18)
    console.log("Test 31: ", node18_R.node.value === 18 ? "PASS" : "FAIL")
    const node20_R = bST8.depthFirstSearchRecursive(20)
    console.log("Test 32: ", node20_R === null ? "PASS" : "FAIL")
    const node17_R = bST8.depthFirstSearchRecursive(17)
    console.log("Test 33: ", node17_R.node.value === 17 ? "PASS" : "FAIL")
    const node10_R = bST8.depthFirstSearchRecursive(10)
    console.log("Test 34: ", node10_R.node.value === 10 ? "PASS" : "FAIL")
    console.log("========== TESTS FOR depthFirstSearchIterative ==========")
    const node7_I = bST8.depthFirstSearchIterative(7)
    console.log("Test 35: ", node7_I.value === 7 ? "PASS" : "FAIL")
    const node18_I = bST8.depthFirstSearchIterative(18)
    console.log("Test 36: ", node18_I.value === 18 ? "PASS" : "FAIL")
    const node20_I = bST8.depthFirstSearchIterative(20)
    console.log("Test 37: ", node20_I === null ? "PASS" : "FAIL")
    const node17_I = bST8.depthFirstSearchIterative(17)
    console.log("Test 38: ", node17_I.value === 17 ? "PASS" : "FAIL")
    const node10_I = bST8.depthFirstSearchIterative(10)
    console.log("Test 39: ", node10_I.value === 10 ? "PASS" : "FAIL")
    console.log("========== TESTS FOR breadthFirstSearch ==========")
    const node7 = bST8.breadthFirstSearch(7)
    console.log("Test 40: ", node7.value === 7 ? "PASS" : "FAIL")
    const node18 = bST8.breadthFirstSearch(18)
    console.log("Test 41: ", node18.value === 18 ? "PASS" : "FAIL")
    const node20 = bST8.breadthFirstSearch(20)
    console.log("Test 42: ", node20 === null ? "PASS" : "FAIL")
    const node17 = bST8.breadthFirstSearch(17)
    console.log("Test 43: ", node17.value === 17 ? "PASS" : "FAIL")
    const node10 = bST8.breadthFirstSearch(10)
    console.log("Test 44: ", node10.value === 10 ? "PASS" : "FAIL")
}
// runBinarySearchTreeTests()
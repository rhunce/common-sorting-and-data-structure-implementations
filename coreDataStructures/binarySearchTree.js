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

    static buildBST(values) {
        const bST = new BinarySearchTree()
        for (const value of values) {
            bST.insertValue(value)
        }
        return bST
    }

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

    removeValue(value) {
        const { parent, node } = this.getNodeAndParent(value)
        if (this._hasNoChildren(node)) {
            if (!parent) {
                this.root = null
                return
            }
            parent.right === node ? parent.right = null : parent.left = null
        } else if (this._hasOneChild(node)) {
            if (!parent) {
                // TODO
                return
            } 
            if (parent.right === node) {
                parent.right = node.left ? node.left : node.right
                return
            } 
            parent.left = node.left ? node.left : node.right
        } else {
            // has two children, maybe root (parent = null), maybe not (parent !== null)
            const { parentNextHighestNode, nextHighestNode } = this._getNextHighestNode(node)
            // *** TODO: Finish fixing this for removal tests (70, 20, 50)
            console.log("parentNextHighestNode: ", parentNextHighestNode)
            console.log("nextHighestNode: ", nextHighestNode)
            if (nextHighestNode.right) {
                if (parentNextHighestNode.right === nextHighestNode) {
                    
                } else {

                }
                parentNextHighestNode.left = nextHighestNode.right
            }
            // nextHighestNode must replace node
            if (!parent) {
                // root node
                nextHighestNode.left = node.left
                nextHighestNode.right = node.right
                node.left = null
                node.right = null
                this.root = nextHighestNode
            } else {
                // not root node
                nextHighestNode.left = node.left
                nextHighestNode.right = node.right
                node.left = null
                node.right = null
                // point parent from node to newHighestNode
                if (parent.right === node) {
                    parent.right = nextHighestNode
                } else {
                    parent.left = nextHighestNode
                }
            }
        }
        return this.root
    }

    getNodeAndParent(value, node = this.root, parent = null) {
        if (node.value === value) return { node, parent }
        if (value > node.value) {
            if (node.right) {
                const foundNode = this.getNodeAndParent(value, node.right, node)
                if (foundNode) return foundNode
            } else {
                return null
            }
        } else {
            if (node.left) {
                const foundNode = this.getNodeAndParent(value, node.left, node)
                if (foundNode) return foundNode
            } else {
                return null
            }
        }
    }

    depthFirstSearch(value) {
        // ...
    }

    breadthFirstSearch(value) {
        // ...
    }

    inOrderTraversal(node = this.root, values = []) {
        if (node.left) this.inOrderTraversal(node.left, values)
        values.push(node.value)
        if (node.right) this.inOrderTraversal(node.right, values)
        return values
    }

    preOrderTraversal(node = this.root, values = []) {
        // console.log("VALUES: ", values)
        values.push(node.value)
        if (node.left) this.preOrderTraversal(node.left, values)
        if (node.right) this.preOrderTraversal(node.right, values)
        return values
    }

    postOrderTraversal(node = this.root, values = []) {
        if (node.left) this.postOrderTraversal(node.left, values)
        if (node.right) this.postOrderTraversal(node.right, values)
        values.push(node.value)
        return values
    }

    _hasNoChildren(node) {
        return !node.left && !node.right
    }

    _hasTwoChildren(node) {
        return node.left && node.right
    }

    _hasOneChild(node) {
        return !this._hasNoChildren(node) && !this._hasTwoChildren(node)
    }

    _getNextHighestNode(node) {
        let parentNextHighestNode = node
        let nextHighestNode = node.right
        while (nextHighestNode.left) {
            parentNextHighestNode = nextHighestNode
            nextHighestNode = nextHighestNode.left
        }
        return { parentNextHighestNode, nextHighestNode }
    }
}

// TEST CASES
/*
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
console.log("========== TESTS FOR getNodeAndParent ==========")
console.log("Test 11:", bST.getNodeAndParent(5).node.value === 5 ? "PASS" : "FAIL")
console.log("Test 12:", bST.getNodeAndParent(4).node.value === 4 ? "PASS" : "FAIL")
console.log("Test 13:", bST.getNodeAndParent(8).node.value === 8 ? "PASS" : "FAIL")
console.log("Test 14:", bST.getNodeAndParent(1).node.value === 1 ? "PASS" : "FAIL")
console.log("Test 15:", bST.getNodeAndParent(7).node.value === 7 ? "PASS" : "FAIL")
console.log("Test 16:", bST.getNodeAndParent(9).node.value === 9 ? "PASS" : "FAIL")
console.log("========== TESTS FOR inOrderTraversal ==========")
console.log("Test 17: ", JSON.stringify(bST.inOrderTraversal()) === JSON.stringify([1,2,3,4,5,6,7,8,9]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR preOrderTraversal ==========")
console.log("Test 18: ", JSON.stringify(bST.preOrderTraversal()) === JSON.stringify([5,3,2,1,4,6,8,7,9]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR postOrderTraversal ==========")
console.log("Test 19: ", JSON.stringify(bST.postOrderTraversal()) === JSON.stringify([1,2,4,3,7,9,8,6,5]) ? "PASS" : "FAIL")
*/
console.log("========== TESTS FOR removeValue ==========")
const bST2 = BinarySearchTree.buildBST([1,0,2,3])
console.log(JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1,0,2,3]))
bST2.removeValue(3)
console.log(JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1,0,2]))
bST2.removeValue(0)
console.log(JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1,2]))
bST2.removeValue(2)
console.log(JSON.stringify(bST2.preOrderTraversal()) === JSON.stringify([1]))
bST2.removeValue(1)
console.log(bST2.root === null)

// console.log("========== TESTS FOR depthFirstSearch ==========")
// console.log("========== TESTS FOR breadthFirstSearch ==========")
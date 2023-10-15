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
        // ...
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
}

// TEST CASES
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
// console.log("========== TESTS FOR removeValue ==========")
console.log("========== TESTS FOR getNodeAndParent ==========")
console.log("Test 11:", bST.getNodeAndParent(5).node.value === 5 ? "PASS" : "FAIL")
console.log("Test 12:", bST.getNodeAndParent(4).node.value === 4 ? "PASS" : "FAIL")
console.log("Test 13:", bST.getNodeAndParent(8).node.value === 8 ? "PASS" : "FAIL")
console.log("Test 14:", bST.getNodeAndParent(1).node.value === 1 ? "PASS" : "FAIL")
console.log("Test 15:", bST.getNodeAndParent(7).node.value === 7 ? "PASS" : "FAIL")
console.log("Test 16:", bST.getNodeAndParent(9).node.value === 9 ? "PASS" : "FAIL")
// console.log("========== TESTS FOR depthFirstSearch ==========")
// console.log("========== TESTS FOR breadthFirstSearch ==========")
console.log("========== TESTS FOR inOrderTraversal ==========")
console.log("Test 10: ", JSON.stringify(bST.inOrderTraversal()) === JSON.stringify([1,2,3,4,5,6,7,8,9]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR preOrderTraversal ==========")
console.log("Test 11: ", JSON.stringify(bST.preOrderTraversal()) === JSON.stringify([5,3,2,1,4,6,8,7,9]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR postOrderTraversal ==========")
console.log("Test 12: ", JSON.stringify(bST.postOrderTraversal()) === JSON.stringify([1,2,4,3,7,9,8,6,5]) ? "PASS" : "FAIL")
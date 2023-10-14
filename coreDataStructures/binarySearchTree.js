class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value)
    }

    insertValue(value) {
        const newNode = new Node(value)
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

    breadthFirstSearch(value) {
        // ...
    }

    depthFirstSearch(value) {
        // ...
    }

    inOrderTraversal() {
        // ...
    }

    preOrderTraversal() {
        // ...
    }

    postOrderTraversal() {
        // ...
    }
}

// TEST CASES
console.log("========== TESTS FOR insertValue ==========")
const bST = new BinarySearchTree(5)
bST.insertValue(3)
bST.insertValue(4)
bST.insertValue(6)
bST.insertValue(2)
bST.insertValue(1)
console.log(bST)
// console.log("========== TESTS FOR removeValue ==========")
// console.log("========== TESTS FOR breadthFirstSearch ==========")
// console.log("========== TESTS FOR depthFirstSearch ==========")
// console.log("========== TESTS FOR inOrderTraversal ==========")
// console.log("========== TESTS FOR preOrderTraversal ==========")
// console.log("========== TESTS FOR postOrderTraversal ==========")
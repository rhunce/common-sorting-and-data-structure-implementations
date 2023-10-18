class Node {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    // Creates a Doubly Linked List from array of values
    static createFromValues(values) {
        // ...
    }

    insertAtHead(value) {
        return this.insertAtPosition(value, 1)
    }

    insertAtTail(value) {
        return this.insertAtPosition(value, this._positionAfterTail())
    }

    insertAtPosition(value, position) {
        position = parseInt(position)
        if (position < 1 || position - this.size > 1) return null
        const nodeToInsert = new Node(value)

        // Empty Doubly Linked List
        if (!this.head) {
            this.head = nodeToInsert
            this.tail = nodeToInsert
            this.size++
            return nodeToInsert   
        }

        // Inserting at head
        if (position === 1) {
            this._spliceNewNodeInAtTargetNode(nodeToInsert, this.head)
            return nodeToInsert
        }

        // Inserting at tail
        if (position === this._positionAfterTail()) {
            this._spliceNewNodeInAtTargetNode(nodeToInsert)
            return nodeToInsert
        }

        let currentNode = this.head
        let currentPosition = 1
        while (currentPosition !== position) {
            currentNode = currentNode.next
            currentPosition++
        }
        this._spliceNewNodeInAtTargetNode(nodeToInsert, currentNode)
        return nodeToInsert
    }

    _spliceNewNodeInAtTargetNode(nodeToInsert, targetNode = null) {
        // Inserting new head
        if (targetNode === this.head) {
            targetNode.prev = nodeToInsert
            nodeToInsert.next = targetNode
            this.head = nodeToInsert
            this.size++
            return
        }

        // Inserting new tail 
        if (!targetNode) {
            this.tail.next = nodeToInsert
            nodeToInsert.prev = this.tail
            this.tail = nodeToInsert
            this.size++
            return
        }

        // Inserting in the middle somewhere
        targetNode.prev.next = nodeToInsert
        nodeToInsert.prev = targetNode.prev
        targetNode.prev = nodeToInsert
        nodeToInsert.next = targetNode
        this.size++
        return 
    }

    _positionAfterTail() {
        return this.size + 1
    }

    updateHead(newValue) {
        // ...
    }

    updateTail(newValue) {
        // ...
    }

    updateValueAtPosition(newValue, position) {
        // ...
    }

    removeHead() {
        // ...
    }

    removeTail() {
        // ...
    }

    removeNodeAtPosition(position) {
        // ...
    }

    getDoublyLinkedListValues() {
        if (!this.head) return null
        const values = []
        let currentNode = this.head
        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }

}

// TEST CASES
console.log("========== TESTS FOR insertAtHead ==========")
const dLL1 = new DoublyLinkedList()
dLL1.insertAtHead(1)
console.log("Test 1: ", dLL1.size === 1 ? "PASS" : "FAIL")
dLL1.insertAtHead(2)
console.log("Test 2: ", dLL1.size === 2 ? "PASS" : "FAIL")
dLL1.insertAtHead(3)
console.log("Test 3: ", dLL1.size === 3 ? "PASS" : "FAIL")
console.log("Test 4: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([3,2,1]) ? "PASS" : "FAIL")
console.log("Test 5: ", dLL1.head.value === 3 ? "PASS" : "FAIL")
console.log("Test 6: ", dLL1.tail.value === 1 ? "PASS" : "FAIL")
console.log("========== TESTS FOR insertAtTail ==========")
const dLL2 = new DoublyLinkedList()
dLL2.insertAtTail(1)
console.log("Test 7: ", dLL2.size === 1 ? "PASS" : "FAIL")
dLL2.insertAtTail(2)
console.log("Test 8: ", dLL2.size === 2 ? "PASS" : "FAIL")
dLL2.insertAtTail(3)
console.log("Test 9: ", dLL2.size === 3 ? "PASS" : "FAIL")
console.log("Test 10: ", JSON.stringify(dLL2.getDoublyLinkedListValues()) === JSON.stringify([1,2,3]) ? "PASS" : "FAIL")
console.log("Test 11: ", dLL2.head.value === 1 ? "PASS" : "FAIL")
console.log("Test 12: ", dLL2.tail.value === 3 ? "PASS" : "FAIL")
console.log("========== TESTS FOR insertAtPosition ==========")
dLL1.insertAtPosition(4, 1)
console.log("Test 13: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([4,3,2,1]) ? "PASS" : "FAIL")
dLL1.insertAtPosition(3.5, 2)
console.log("Test 14: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([4,3.5,3,2,1]) ? "PASS" : "FAIL")
dLL1.insertAtPosition(2.5, 4)
console.log("Test 15: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([4,3.5,3,2.5,2,1]) ? "PASS" : "FAIL")
dLL1.insertAtPosition(1.5, dLL1.size)
console.log("Test 16: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([4,3.5,3,2.5,2,1.5,1]) ? "PASS" : "FAIL")
dLL1.insertAtPosition(5, 1)
console.log("Test 17: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([5,4,3.5,3,2.5,2,1.5,1]) ? "PASS" : "FAIL")
dLL1.insertAtPosition(0, dLL1.size + 1)
console.log("Test 18: ", JSON.stringify(dLL1.getDoublyLinkedListValues()) === JSON.stringify([5,4,3.5,3,2.5,2,1.5,1,0]) ? "PASS" : "FAIL")
console.log("Test 19: ", dLL1.insertAtPosition(-1, 0) === null ? "PASS" : "FAIL")
console.log("Test 20: ", dLL1.insertAtPosition(-1, dLL1.size + 2) === null ? "PASS" : "FAIL")
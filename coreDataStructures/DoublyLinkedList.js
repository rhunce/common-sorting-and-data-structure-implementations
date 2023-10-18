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
        const dLL = new DoublyLinkedList()
        for (const value of values) {
            dLL.insertAtTail(value)
        }
        return dLL
    }

    insertAtHead(value) {
        return this.insertAtPosition(value, 1)
    }

    insertAtTail(value) {
        return this.insertAtPosition(value, this._positionAfterTail())
    }

    insertAtPosition(value, position) {
        if (!this._positionValid(position)) return null
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

    updateHead(newValue) {
        this.head.value = newValue
        return this.head
    }

    updateTail(newValue) {
        this.tail.value = newValue
        return this.tail
    }

    updateValueAtPosition(newValue, position) {
        const nodeToUpdate = this._getNodeAtPosition(position)
        nodeToUpdate.value = newValue
        return nodeToUpdate
    }

    removeHead() {
        if (!this.head) return null
        this.head = this.head.next
        this.head.prev = null
        this.size--
        return this.head
    }

    removeTail() {
        if (!this.tail) return null
        this.tail = this.tail.prev
        this.tail.next = null
        this.size--
        return this.tail
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

    _getNodeAtPosition(position) {
        if (!this._positionValid(position)) return null
        let currentNode = this.head
        let currentPosition = 1
        while (currentPosition !== position) {
            currentNode = currentNode.next
            currentPosition++
        }
        return currentNode
    }

    _positionValid(position) {
        const positionIsInt = parseInt(position) === position
        if (!positionIsInt || position < 1 || position - this.size > 1) return false
        return true
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
console.log("========== TESTS FOR createFromValues ==========")
const dLL3 = DoublyLinkedList.createFromValues([1,2,3,4,5])
console.log("Test 21: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([1,2,3,4,5]) ? "PASS" : "FAIL")
console.log("Test 22: ", dLL3.head.value === 1 ? "PASS" : "FAIL")
console.log("Test 23: ", dLL3.tail.value === 5 ? "PASS" : "FAIL")
console.log("Test 24: ", dLL3.head.next.value === 2 ? "PASS" : "FAIL")
console.log("Test 25: ", dLL3.head.next.next.value === 3 ? "PASS" : "FAIL")
console.log("Test 26: ", dLL3.head.next.next.next.value === 4 ? "PASS" : "FAIL")
console.log("Test 27: ", dLL3.head.next.next.next.next.value === 5 ? "PASS" : "FAIL")
console.log("Test 28: ", dLL3.head.next.next.next.next.prev.value === 4 ? "PASS" : "FAIL")
console.log("Test 29: ", dLL3.head.next.next.next.next.prev.prev.value === 3 ? "PASS" : "FAIL")
console.log("Test 30: ", dLL3.head.next.next.next.next.prev.prev.prev.value === 2 ? "PASS" : "FAIL")
console.log("Test 31: ", dLL3.head.next.next.next.next.prev.prev.prev.prev.value === 1 ? "PASS" : "FAIL")
console.log("========== TESTS FOR updateHead ==========")
dLL3.updateHead(100)
console.log("Test 32: ", dLL3.head.value === 100 ? "PASS" : "FAIL")
console.log("Test 33: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([100,2,3,4,5]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR updateTail ==========")
dLL3.updateTail(500)
console.log("Test 34: ", dLL3.tail.value === 500 ? "PASS" : "FAIL")
console.log("Test 35: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([100,2,3,4,500]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR updateValueAtPosition ==========")
dLL3.updateValueAtPosition(200, 2)
console.log("Test 36: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([100,200,3,4,500]) ? "PASS" : "FAIL")
dLL3.updateValueAtPosition(300, 3)
console.log("Test 37: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([100,200,300,4,500]) ? "PASS" : "FAIL")
dLL3.updateValueAtPosition(400, 4)
console.log("Test 38: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([100,200,300,400,500]) ? "PASS" : "FAIL")
console.log("========== TESTS FOR removeHead ==========")
dLL3.removeHead()
console.log("Test 39: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([200,300,400,500]) ? "PASS" : "FAIL")
console.log("Test 40: ", dLL3.head.value === 200 ? "PASS" : "FAIL")
console.log("Test 41: ", dLL3.size === 4 ? "PASS" : "FAIL")
console.log("========== TESTS FOR removeTail ==========")
dLL3.removeTail()
console.log("Test 42: ", JSON.stringify(dLL3.getDoublyLinkedListValues()) === JSON.stringify([200,300,400]) ? "PASS" : "FAIL")
console.log("Test 43: ", dLL3.tail.value === 400 ? "PASS" : "FAIL")
console.log("Test 44: ", dLL3.size === 3 ? "PASS" : "FAIL")
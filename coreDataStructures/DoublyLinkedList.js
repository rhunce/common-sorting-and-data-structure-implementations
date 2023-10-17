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
        const node = new Node(value)
        this.insertAtPosition(node, 1)
        return node
    }

    insertAtTail(value) {
        const node = new Node(value)
        this.insertAtPosition(node, this.size + 1)
        return node
    }


    insertAtPosition(value, position) {
        if (position - this.size > 0) return null
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
        if (position === this.size + 1) {
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
const dLL = new DoublyLinkedList()
console.log("========== TESTS FOR insertAtHead ==========")
// ...start inserting at head and testing using getDoublyLinkedListValues method
console.log("========== TESTS FOR insertAtTail ==========")
console.log("========== TESTS FOR insertAtPosition ==========")
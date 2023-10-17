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
        // ...
    }

    insertAtTail(value) {
        // ...
    }

    insertAtPosition(value, position) {
        // ...
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

    // Tunnels from head to tail and pushes values into array and returns array
    getDoublyLinkedListValues() {
        // ...
    }

}
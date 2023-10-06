class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(arr = []) {
        this.head = this.constructLinkedList(arr)
    }

    // O(n) time | O(n) space, where n is length of the input array
    constructLinkedList(array) {
        let currentNode = null
        for (let i = 0; i < array.length; i++) {
            const node = new Node(array[i])
            if (!currentNode) {
                this.head = node
                currentNode = this.head
            } else {
                currentNode.next = node
                currentNode = currentNode.next
            }
        }

        return this.head
    }

    // O(n) time | O(n) space, where n is number of nodes in linked list
    getLinkedListValues() {
        const values = []
        let currentNode = this.head
        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }

    // O(1) time | O(1) space
    insertAtHead(value) {
        this.head = this.insertNodeAtPosition(value, 1)
        return this.head
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    insertAtTail(value) {
        this.insertNodeAtPosition(value, this.getLength())
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    insertNodeAtPosition(value, position) {
        const lastPosition = this.getLength()
        if (position < 1 || position > lastPosition) return null

        const nodeToInsert = new Node(value)

        if (position === 1) {
            nodeToInsert.next = this.head
            this.head = nodeToInsert
            return this.head
        }

        if (position === lastPosition) {
            const lastNode = this.getTail()
            lastNode.next = nodeToInsert
            return this.head
        }

        let prevToTargetNode = null
        let targetNode = null
        let currentPosition = 1
        let currentNode = this.head
        while (true) {
            if (currentPosition === position - 1) {
                prevToTargetNode = currentNode
                targetNode = prevToTargetNode.next
                break
            }
            currentNode = currentNode.next
            currentPosition++
        }
        nodeToInsert.next = targetNode
        prevToTargetNode.next = nodeToInsert

        return this.head
    }

    
    // O(n) time | O(1) space, where n is number of nodes in linked list
    getTail() {
        return  this.getNodeAtPosition(this.getLength())
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    getLength() {
        let currentPosition = 1
        let currentNode = this.head

        while (currentNode.next) {
            currentNode = currentNode.next
            currentPosition++
        }

        return currentPosition
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    isInList(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) return true
            currentNode = currentNode.next
        }
        return false
    }

    getNodeAtPosition(position) {
        const lastPosition = this.getLength()
        if (position < 1 || position > lastPosition) return null
        let currentPosition = 1
        let currentNode = this.head
        while (true) {
            if (currentPosition === position) {
                break
            }
            currentNode = currentNode.next
            currentPosition++
        }
        return currentNode
    }

    // updateHead(value)
        // return updated node

    // updateTail(value)
        // return updated node

    // updateNodeAtPosition(value, position)
        // return true if updated, or false if position is out of range

    // deleteHead()
        // return deleted node

    // deleteTail()
        // return deleted node

    // deleteNodeAtPosition(position)
        // return deleted node
}

// TEST CASES
console.log("========== TESTS FOR constructLinkedList ==========")
console.log("Should return []: ", new LinkedList().getLinkedListValues())
console.log("Should return []: ", new LinkedList([]).getLinkedListValues())
console.log("Should return [1, 2, 3, 4, 5]: ", new LinkedList([1,2,3,4,5]).getLinkedListValues())
console.log("Should return [-10, 'cat', false, [1, 2], { key: 'val' }, 2.55]: ", new LinkedList([-10, "cat", false, [1, 2], { key: "val" }, 2.55]).getLinkedListValues())
console.log("========== TESTS FOR insertNodeAtPosition ==========")
const linkedList1 = new LinkedList([1,2,3,4,5])
linkedList1.insertNodeAtPosition(10, 3)
console.log("Should return [1, 2, 10, 3, 4, 5]: ", linkedList1.getLinkedListValues())
console.log("Should return null: ", linkedList1.insertNodeAtPosition(20, -1))
console.log("Should return null: ", linkedList1.insertNodeAtPosition(20, 7))
linkedList1.insertNodeAtPosition(20, 1)
console.log("Should return [20, 1, 2, 10, 3, 4, 5]: ", linkedList1.getLinkedListValues())
linkedList1.insertNodeAtPosition(30, 7)
console.log("Should return [20, 1, 2, 10, 3, 4, 5, 30]: ", linkedList1.getLinkedListValues())
console.log("========== TESTS FOR insertAtHead ==========")
const linkedList2 = new LinkedList([1,2,3,4,5])
linkedList2.insertAtHead(10)
console.log("Should return [10, 1, 2, 3, 4, 5]: ", linkedList2.getLinkedListValues())
linkedList2.insertAtHead(20)
console.log("Should return [20, 10, 1, 2, 3, 4, 5]: ", linkedList2.getLinkedListValues())
linkedList2.insertAtHead(30)
console.log("Should return [30, 20, 10, 1, 2, 3, 4, 5]: ", linkedList2.getLinkedListValues())
// TESTS FOR insertAtTail
console.log("========== TESTS FOR insertAtTail ==========")
linkedList2.insertAtTail(100)
console.log("Should return [30, 20, 10, 1, 2, 3, 4, 5, 100]: ", linkedList2.getLinkedListValues())
linkedList2.insertAtTail(200)
console.log("Should return [30, 20, 10, 1, 2, 3, 4, 5, 100, 200]: ", linkedList2.getLinkedListValues())
linkedList2.insertAtTail(300)
console.log("Should return [30, 20, 10, 1, 2, 3, 4, 5, 100, 200, 300]: ", linkedList2.getLinkedListValues())
console.log("========== TESTS FOR isInList ==========")
const linkedList3 = new LinkedList([1,2,3])
console.log("Should return true: ", linkedList3.isInList(1))
console.log("Should return false: ", linkedList3.isInList(4))
console.log("========== TESTS FOR getTail ==========")
console.log("Should return { value: 30, next: null }: ", linkedList1.getTail())
console.log("Should return { value: 300, next: null }: ", linkedList2.getTail())
console.log("Should return { value: 3, next: null }: ", linkedList3.getTail())
console.log("========== TESTS FOR getNodeAtPosition ==========")
const linkedList4 = new LinkedList([1,2,3,4,5])
console.log("Should return null: ", linkedList4.getNodeAtPosition(0))
console.log("Should return { value: 1, next: Node... }: ", linkedList4.getNodeAtPosition(1))
console.log("Should return { value: 2, next: Node... }: ", linkedList4.getNodeAtPosition(2))
console.log("Should return { value: 3, next: Node... }: ", linkedList4.getNodeAtPosition(3))
console.log("Should return { value: 4, next: Node... }: ", linkedList4.getNodeAtPosition(4))
console.log("Should return { value: 5, next: null }: ", linkedList4.getNodeAtPosition(5))
console.log("Should return null: ", linkedList4.getNodeAtPosition(6))

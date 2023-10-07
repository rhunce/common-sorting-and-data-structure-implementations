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

    // O(1) time | O(1) space
    updateHead(value) {
        this.head.value = value
        return this.head
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    updateTail(value) {
        const tail = this.getTail()
        tail.value = value
        return tail
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    updateNodeAtPosition(value, position) {
        const node = this.getNodeAtPosition(position)
        if (node) node.value = value
        return node
    }

    // O(1) time | O(1) space
    deleteHead() {
        const rootNode = this.head
        if (rootNode) {
            this.head = rootNode.next
            rootNode.next = null
        }
        return this.head
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    deleteTail() {
        const nodeBeforeTail = this.getNodeAtPosition(this.getLength() - 1)
        if (nodeBeforeTail) {
            nodeBeforeTail.next = null
            return nodeBeforeTail
        } else {
            this.head = null
            return this.head
        }
    }

    // O(n) time | O(1) space, where n is number of nodes in linked list
    deleteNodeAtPosition(position) {
        const length = this.getLength()
        if (position < 1 || position > length) return null
        if (position === 1) this.deleteHead()
        if (position === length) this.deleteTail()
        if (position > 1 && position < length) {
            const nodeBeforeNodeToDelete = this.getNodeAtPosition(position - 1)
            const nodeToDelete = nodeBeforeNodeToDelete.next
            nodeBeforeNodeToDelete.next = nodeToDelete.next
            nodeToDelete.next = null

        }
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

        while (currentNode && currentNode.next) {
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

    // O(n) time | O(1) space, where n is number of nodes in linked list
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
console.log("========== TESTS FOR updateHead ==========")
console.log("Should return { value: 777, next: Node... }: ", linkedList1.updateHead(777))
console.log("Should return { value: 777, next: Node... }: ", linkedList2.updateHead(777))
console.log("Should return { value: 777, next: Node... }: ", linkedList3.updateHead(777))
console.log("========== TESTS FOR updateTail ==========")
console.log("Should return { value: 999, next: null }: ", linkedList1.updateTail(999))
console.log("Should return { value: 999, next: null }: ", linkedList2.updateTail(999))
console.log("Should return { value: 999, next: null }: ", linkedList3.updateTail(999))
console.log("========== TESTS FOR updateNodeAtPosition ==========")
const linkedList5 = new LinkedList([1,2,3,4,5])
console.log("Should return null:", linkedList5.updateNodeAtPosition(111, -1))
console.log("Should return null:", linkedList5.updateNodeAtPosition(111, 0))
console.log("Should return { value: 111, next: Node(2) }:", linkedList5.updateNodeAtPosition(111, 1))
console.log("Should return { value: 222, next: Node(3) }:", linkedList5.updateNodeAtPosition(222, 2))
console.log("Should return { value: 333, next: Node(4) }:", linkedList5.updateNodeAtPosition(333, 3))
console.log("Should return { value: 444, next: Node(5) }:", linkedList5.updateNodeAtPosition(444, 4))
console.log("Should return { value: 555, next: null }:", linkedList5.updateNodeAtPosition(555, 5))
console.log("Should return null:", linkedList5.updateNodeAtPosition(666, 6))
console.log("Should return null:", linkedList5.updateNodeAtPosition(777, 7))
console.log("Should return [111,222,333,444,555]:", linkedList5.getLinkedListValues())
console.log("========== TESTS FOR deleteHead ==========")
const linkedList6 = new LinkedList([1,2,3,4,5])
linkedList6.deleteHead()
console.log("Should return [2,3,4,5]", linkedList6.getLinkedListValues())
linkedList6.deleteHead()
console.log("Should return [3,4,5]", linkedList6.getLinkedListValues())
linkedList6.deleteHead()
console.log("Should return [4,5]", linkedList6.getLinkedListValues())
linkedList6.deleteHead()
console.log("Should return [5]", linkedList6.getLinkedListValues())
linkedList6.deleteHead()
console.log("Should return []", linkedList6.getLinkedListValues())
linkedList6.deleteHead()
console.log("Should return []", linkedList6.getLinkedListValues())
console.log("========== TESTS FOR deleteTail ==========")
const linkedList7 = new LinkedList([1,2,3,4,5])
linkedList7.deleteTail()
console.log("Should return [1,2,3,4]", linkedList7.getLinkedListValues())
linkedList7.deleteTail()
console.log("Should return [1,2,3]", linkedList7.getLinkedListValues())
linkedList7.deleteTail()
console.log("Should return [1,2]", linkedList7.getLinkedListValues())
linkedList7.deleteTail()
console.log("Should return [1]", linkedList7.getLinkedListValues())
linkedList7.deleteTail()
console.log("Should return []", linkedList7.getLinkedListValues())
linkedList7.deleteTail()
console.log("Should return []", linkedList7.getLinkedListValues())
console.log("========== TESTS FOR deleteNodeAtPosition ==========")
const linkedList8 = new LinkedList([1,2,3,4,5])
linkedList8.deleteNodeAtPosition(-1)
console.log("Should return [1,2,3,4,5]", linkedList8.getLinkedListValues())
linkedList8.deleteNodeAtPosition(0)
console.log("Should return [1,2,3,4,5]", linkedList8.getLinkedListValues())
linkedList8.deleteNodeAtPosition(3)
console.log("Should return [1,2,4,5]", linkedList8.getLinkedListValues())
linkedList8.deleteNodeAtPosition(4)
console.log("Should return [1,2,4]", linkedList8.getLinkedListValues())
linkedList8.deleteNodeAtPosition(1)
console.log("Should return [2,4]", linkedList8.getLinkedListValues())
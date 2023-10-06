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

    getLinkedListValues() {
        const values = []
        let currentNode = this.head
        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }

    insertAtHead(value) {
        this.head = this.insertNodeAtPosition(value, 1)
        return this.head
    }

    insertAtTail(value) {
        this.insertNodeAtPosition(value, this._getLastPosition())
    }
    //                     p     t
    // this.head --> 1 --> 2 --> 3 --> 4 --> 5 --> null
    // 10, 3
    // this.head --> 1 --> 2 --> 10 --> 3 --> 4 --> 5 --> null
    insertNodeAtPosition(value, position) {
        // ensure position within range of LL, return if not

        const nodeToInsert = new Node(value)
        // if head
            // ...

        // if tail
            // ...

        let prevToTargetNode = null
        let targetNode = null
        let currentPosition = 1
        let currentNode = this.head
        while (true) {
            //  if currentPosition === position - 1
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

    _getLastPosition() {
        // return int last position in LL
    }
 
    // deleteHead()
        // return deleted node

    // deleteTail()
        // return deleted node

    // deleteNodeAtPosition(position)
        // return deleted node

    // getHead()
        // return node

    // getTail()
        // return node

    // getNodeAtPosition(position)
        // return node

    // updateHead(value)
        // return updated node

    // updateTail(value)
        // return updated node

    // updateNodeAtPosition(value, position)
        // return true if updated, or false if position is out of range

    // getLength()
        // reuturn int length

    // isInList(value)
        // return [true/false, position/null]


}



//  head --> 5 --> 4 --> 3 --> 2 --> 1
// 

// TEST CASES
// FOR constructLinkedList
console.log("Should return []: ", new LinkedList().getLinkedListValues())
console.log("Should return []: ", new LinkedList([]).getLinkedListValues())
console.log("Should return [1, 2, 3, 4, 5]: ", new LinkedList([1,2,3,4,5]).getLinkedListValues())
console.log("Should return [-10, 'cat', false, [1, 2], { key: 'val' }, 2.55]: ", new LinkedList([-10, "cat", false, [1, 2], { key: "val" }, 2.55]).getLinkedListValues())
// FOR insertNodeAtPosition
const linkedList = new LinkedList([1,2,3,4,5])
linkedList.insertNodeAtPosition(10, 3)
console.log("Should return [1, 2, 10, 3, 4, 5]: ", linkedList.getLinkedListValues())

// FOR insertAtHead
// FOR insertAtTail
// FOR _getLastPosition

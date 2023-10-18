const DoublyLinkedList = require("./DoublyLinkedList")

class Stack {
    #stack
    constructor() {
        // using a doubly linked list here (that includes a pointer to tail)
        // for more efficient memory allocation
        this.#stack = new DoublyLinkedList()
    }

    // O(1) time | O(1) space
    push(value) {
        this.#stack.insertAtTail(value)
        return this.peek()
    }

    // O(1) time | O(1) space
    pop() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        const currentTail = this.#stack.tail
        this.#stack.removeTail()
        return currentTail.value
    }

    // O(1) time | O(1) space
    peek() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        return this.#stack.tail?.value
    }

    // O(1) time | O(1) space
    size() {
        return this.#stack.size
    }

    // O(1) time | O(1) space
    isEmpty() {
        return this.size() === 0
    }

    // O(1) time | O(1) space
    getStackCopy() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        return this.#stack.getDoublyLinkedListValues()
    }
}
Stack.EMPTY_STACK = Symbol("Stack is empty")

// TEST CASES
function runStackTests() {
    console.log("========== TESTS FOR Stack ==========")
    const stack = new Stack()
    console.log("Test 1: ", stack.isEmpty() === true ? "PASS" : "FAIL")
    console.log("Test 2: ", stack.push(1) === 1 ? "PASS" : "FAIL")
    console.log("Test 3: ", stack.push(2) === 2 ? "PASS" : "FAIL")
    console.log("Test 4: ", stack.push(3) === 3 ? "PASS" : "FAIL")
    console.log("Test 5: ", JSON.stringify(stack.getStackCopy()) === JSON.stringify([1,2,3]) ? "PASS" : "FAIL")
    console.log("Test 6: ", stack.size() === 3 ? "PASS" : "FAIL")
    console.log("Test 7: ", stack.peek() === 3 ? "PASS" : "FAIL")
    console.log("Test 8: ", stack.pop() === 3 ? "PASS" : "FAIL")
    console.log("Test 9: ", stack.size() === 2 ? "PASS" : "FAIL")
    console.log("Test 10: ", stack.peek() === 2 ? "PASS" : "FAIL")
    console.log("Test 11: ", stack.pop() === 2 ? "PASS" : "FAIL")
    console.log("Test 12: ", stack.size() === 1 ? "PASS" : "FAIL")
    console.log("Test 13: ", stack.peek() === 1 ? "PASS" : "FAIL")
    console.log("Test 14: ", stack.isEmpty() === false ? "PASS" : "FAIL")
    console.log("Test 15: ", stack.pop() === 1 ? "PASS" : "FAIL")
    console.log("Test 16: ", stack.isEmpty() === true ? "PASS" : "FAIL")
    console.log("Test 17: ", stack.size() === 0 ? "PASS" : "FAIL")
    console.log("Test 18: ", stack.peek() === Stack.EMPTY_STACK ? "PASS" : "FAIL")
    console.log("Test 19: ", stack.getStackCopy() === Stack.EMPTY_STACK ? "PASS" : "FAIL")
}
// runStackTests()
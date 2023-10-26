class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    #top
    #size
    constructor() {
        this.#top = null
        this.#size = 0
    }

    // O(1) time | O(1) space
    push(value) {
        const node = new Node(value)
        this.#size++
        if (!this.#top) {
            this.#top = node
            return this.#top.value
        }
        node.next = this.#top
        this.#top = node
        return this.#top.value
    }

    // O(1) time | O(1) space
    pop() {
        if (!this.#top) {
            return null
        }

        const poppedNode = this.#top
        this.#top = poppedNode.next
        poppedNode.next = null
        this.#size--
        return poppedNode.value
    }

    // O(1) time | O(1) space
    peek() {
        if (!this.#top) {
            return null
        }
        return this.#top.value
    }

    // O(1) time | O(1) space
    size() {
        return this.#size
    }

    // O(1) time | O(1) space
    isEmpty() {
        return this.#size === 0
    }

    // O(n) time | O(1) space
    // n = number of nodes in Stack
    getStackCopy() {
        const values = []
        let currentNode = this.#top
        while (currentNode) {
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }
}

// TEST CASES
function runStackTests() {
    console.log("========== TESTS FOR Stack ==========")
    const stack = new Stack()
    console.log("Test 1: ", stack.isEmpty() === true ? "PASS" : "FAIL")
    console.log("Test 2: ", stack.push(1) === 1 ? "PASS" : "FAIL")
    console.log("Test 3: ", stack.push(2) === 2 ? "PASS" : "FAIL")
    console.log("Test 4: ", stack.push(3) === 3 ? "PASS" : "FAIL")
    console.log("Test 5: ", JSON.stringify(stack.getStackCopy()) === JSON.stringify([3,2,1]) ? "PASS" : "FAIL")
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
    console.log("Test 18: ", stack.peek() === null ? "PASS" : "FAIL")
    console.log("Test 19: ", stack.getStackCopy().length === 0 ? "PASS" : "FAIL")
}
// runStackTests()

module.exports = Stack
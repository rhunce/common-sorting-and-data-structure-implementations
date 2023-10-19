class Queue {
    #queue
    #frontIndex
    #backIndex
    constructor() {
        this.#queue = {}
        this.#frontIndex = 0
        this.#backIndex = 0
    }

    // O(1) time | O(1) space
    enqueue(value) {
        this.#queue[this.#backIndex] = value
        this.#backIndex++
        return this.#queue[this.#backIndex - 1]
    }

    // O(1) time | O(1) space
    dequeue() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        const value = this.#queue[this.#frontIndex]
        delete this.#queue[this.#frontIndex]
        this.#frontIndex++
        return value
    }

    // O(1) time | O(1) space
    size() {
        return this.#backIndex - this.#frontIndex
    }

    // O(1) time | O(1) space
    isEmpty() {
        return this.size() === 0
    }

    // O(1) time | O(1) space
    peekBackOfQueue() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        return this.#queue[this.#backIndex - 1]
    }

    // O(1) time | O(1) space
    peekFrontOfQueue() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        return this.#queue[this.#frontIndex]
    }

    // O(1) time | O(1) space
    getQueueCopy() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        return JSON.stringify(this.#queue)
    }
}
Queue.EMPTY_QUEUE = Symbol("Queue is empty")

// TEST CASES
function runQueueTests() {
    console.log("========== TESTS FOR Queue ==========")
    const queue = new Queue()
    console.log("Test 1: ", queue.isEmpty() === true ? "PASS" : "FAIL")
    console.log("Test 2: ", queue.enqueue(1) === 1 ? "PASS" : "FAIL")
    console.log("Test 3: ", queue.enqueue(2) === 2 ? "PASS" : "FAIL")
    console.log("Test 4: ", queue.enqueue(3) === 3 ? "PASS" : "FAIL")
    console.log("Test 5: ", queue.getQueueCopy() === JSON.stringify({0:1,1:2,2:3}) ? "PASS" : "FAIL")
    console.log("Test 6: ", queue.size() === 3 ? "PASS" : "FAIL")
    console.log("Test 7: ", queue.peekBackOfQueue() === 3 ? "PASS" : "FAIL")
    console.log("Test 8: ", queue.peekFrontOfQueue() === 1 ? "PASS" : "FAIL")
    console.log("Test 9: ", queue.dequeue() === 1 ? "PASS" : "FAIL")
    console.log("Test 10: ", queue.size() === 2 ? "PASS" : "FAIL")
    console.log("Test 11: ", queue.peekBackOfQueue() === 3 ? "PASS" : "FAIL")
    console.log("Test 12: ", queue.peekFrontOfQueue() === 2 ? "PASS" : "FAIL")
    console.log("Test 13: ", queue.dequeue() === 2 ? "PASS" : "FAIL")
    console.log("Test 14: ", queue.size() === 1 ? "PASS" : "FAIL")
    console.log("Test 15: ", queue.peekBackOfQueue() === 3 ? "PASS" : "FAIL")
    console.log("Test 16: ", queue.peekFrontOfQueue() === 3 ? "PASS" : "FAIL")
    console.log("Test 17: ", queue.isEmpty() === false ? "PASS" : "FAIL")
    console.log("Test 18: ", queue.dequeue() === 3 ? "PASS" : "FAIL")
    console.log("Test 19: ", queue.isEmpty() === true ? "PASS" : "FAIL")
    console.log("Test 20: ", queue.size() === 0 ? "PASS" : "FAIL")
    console.log("Test 21: ", queue.peekBackOfQueue() === Queue.EMPTY_QUEUE ? "PASS" : "FAIL")
    console.log("Test 22: ", queue.peekFrontOfQueue() === Queue.EMPTY_QUEUE ? "PASS" : "FAIL")
    console.log("Test 23: ", queue.getQueueCopy() === Queue.EMPTY_QUEUE ? "PASS" : "FAIL")
}
// runQueueTests()

module.exports = Queue
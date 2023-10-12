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
    printQueue() {
        if (this.isEmpty()) {
            console.log(Queue.EMPTY_QUEUE)
            return
        }
        console.log(this.#queue)
    }
}
Queue.EMPTY_QUEUE = Symbol("Queue is empty")

// TEST CASES
console.log("========== TESTS FOR Queue ==========")
const queue = new Queue()
console.log("Should return true: ", queue.isEmpty())
console.log("Should return 1: ", queue.enqueue(1))
console.log("Should return 2: ", queue.enqueue(2))
console.log("Should return 3: ", queue.enqueue(3))
console.log("Should print { '0': 1, '1': 2, '2': 3 }")
queue.printQueue()
console.log("Should return 3: ", queue.size())
console.log("Should return 3: ", queue.peekBackOfQueue())
console.log("Should return 1: ", queue.peekFrontOfQueue())
console.log("Should return 1: ", queue.dequeue())
console.log("Should return 2: ", queue.size())
console.log("Should return 3: ", queue.peekBackOfQueue())
console.log("Should return 2: ", queue.peekFrontOfQueue())
console.log("Should return 2: ", queue.dequeue())
console.log("Should return 1: ", queue.size())
console.log("Should return 3: ", queue.peekBackOfQueue())
console.log("Should return 3: ", queue.peekFrontOfQueue())
console.log("Should return false: ", queue.isEmpty())
console.log("Should return 3: ", queue.dequeue())
console.log("Should return true: ", queue.isEmpty())
console.log("Should return 0: ", queue.size())
console.log("Should return Queue is empty: ", queue.peekBackOfQueue())
console.log("Should return Queue is empty: ", queue.peekFrontOfQueue())
console.log("Should print Queue is empty")
queue.printQueue()
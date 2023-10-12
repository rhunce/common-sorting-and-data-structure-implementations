class Queue {
    #queue
    constructor() {
        // can use linked list here (that includes a pointer to tail)
        // for more efficient memory allocation
        this.#queue = []
    }

    enqueue(value) {
        this.#queue.unshift(value)
        return this.peekBackOfQueue()
    }

    dequeue() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        return this.#queue.pop()
    }

    size() {
        return this.#queue.length
    }

    isEmpty() {
        return this.size() === 0
    }

    peekBackOfQueue() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        return this.#queue[0]
    }

    peekFrontOfQueue() {
        if (this.isEmpty()) {
            return Queue.EMPTY_QUEUE
        }
        return this.#queue[this.size() - 1]

    }

    printQueue() {
        if (this.isEmpty()) {
            console.log(Queue.EMPTY_QUEUE)
        }
        for (const el of this.#queue) {
            console.log(el)
        }
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
console.log("Should print 3 2 1")
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

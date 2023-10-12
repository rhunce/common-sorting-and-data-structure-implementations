class Queue {
    #queue
    constructor() {
        // can use linked list here (that includes a pointer to tail)
        // for more efficient memory allocation
        this.#queue = []
    }

    // this.#queue = [5 4 3 2 1]

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
            return Queue.EMPTY_QUEUE
        }

    }
}
Queue.EMPTY_QUEUE = Symbol("Queue is empty")


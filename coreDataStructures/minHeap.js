/*

           3
    13          19
33      42

*/

class MinHeap {
    #minHeap
    #lastIndex
    constructor() {
        this.#minHeap = []
        this.#lastIndex = 0
    }

    removeRootValue() {
        // replace root node with node at last position (lastIndex - 1)
        // replace node at last position with null
        // trickle new root node down
        // decrement lastIndex
    }

    insertValue(value) {
        this.#minHeap[this.#lastIndex] = value
        this._bubbleUp(this.#lastIndex)
        this.#lastIndex++
    }

    heapify() {
        // ...
    }

    displayHeap() {
        return this.#minHeap.slice(0)
    }

    peekMin() {
        return this.#minHeap[0]
    }

    _bubbleUp(idx) {
        let currentIdx = idx
        while (currentIdx > 0 && this.#minHeap[currentIdx] < this.#minHeap[Math.floor((currentIdx-1)/2)]) {
            this._swap(this.#minHeap, currentIdx, Math.floor((currentIdx-1)/2))
            currentIdx = Math.floor((currentIdx-1)/2)
        }
    }

    _swap(arr, idxOne, idxTwo) {
        const temp = arr[idxOne]
        arr[idxOne] = arr[idxTwo]
        arr[idxTwo] = temp
    }
}

// TEST CASES
console.log("========== TESTS FOR insertValue ==========")
const minHeap = new MinHeap()
minHeap.insertValue(0)
console.log("Should return [ 0 ]: ", minHeap.displayHeap())
minHeap.insertValue(1)
console.log("Should return [ 0, 1 ]: ", minHeap.displayHeap())
minHeap.insertValue(2)
console.log("Should return [ 0, 1, 2 ]: ", minHeap.displayHeap())
minHeap.insertValue(3)
console.log("Should return [ 0, 1, 2, 3 ]: ", minHeap.displayHeap())
minHeap.insertValue(4)
console.log("Should return [ 0, 1, 2, 3, 4 ]: ", minHeap.displayHeap())
minHeap.insertValue(-1)
console.log("Should return [ -1, 1, 0, 3, 4, 2 ]: ", minHeap.displayHeap())
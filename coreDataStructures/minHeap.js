class MinHeap {
    #minHeap
    #lastIndex
    constructor() {
        this.#minHeap = []
        this.#lastIndex = 0
    }
    
    insertValue(value) {
        this.#minHeap[this.#lastIndex] = value
        this._bubbleUp(this.#lastIndex)
        this.#lastIndex++
        return this.getHeapCopy()
    }

    removeRootValue() {
        if (!this.#minHeap.length) return this.getHeapCopy()
        this.#minHeap[0] = this.#minHeap[this.#lastIndex - 1]
        this.#minHeap.pop()
        this._trickleDown()
        this.#lastIndex--
        return this.getHeapCopy()
    }

    heapify() {
        // ...
    }

    getHeapCopy() {
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

    _trickleDown() {
        let currentIdx = 0
        let smallerChildIdx = this._getSmallerChildIdx(this.#minHeap, currentIdx)
        while (this.#minHeap[currentIdx] > this.#minHeap[smallerChildIdx]) {
            this._swap(this.#minHeap, currentIdx, smallerChildIdx)
            currentIdx = smallerChildIdx
            smallerChildIdx = this._getSmallerChildIdx(this.#minHeap, currentIdx)
        }
        return this.getHeapCopy()
    }

    _getSmallerChildIdx(arr, idx) {
        const leftChildIdx = (2*idx) + 1
        const rightChildIdx = (2*idx) + 2
        const leftChild = arr[leftChildIdx]
        const rightChild = arr[rightChildIdx]
        if (leftChild === undefined && rightChild === undefined) return null
        if (leftChild !== undefined && rightChild === undefined) return leftChildIdx
        if (leftChild === undefined && rightChild !== undefined) return rightChildIdx
        return leftChild < rightChild ? leftChildIdx : rightChildIdx
    }

    _swap(arr, idxOne, idxTwo) {
        const temp = arr[idxOne]
        arr[idxOne] = arr[idxTwo]
        arr[idxTwo] = temp
    }
}

// TEST CASES
console.log("========== TESTS FOR insertValue ==========")
const minHeap1 = new MinHeap()
minHeap1.insertValue(0)
console.log("Should return [ 0 ]: ", minHeap1.getHeapCopy())
minHeap1.insertValue(1)
console.log("Should return [ 0, 1 ]: ", minHeap1.getHeapCopy())
minHeap1.insertValue(2)
console.log("Should return [ 0, 1, 2 ]: ", minHeap1.getHeapCopy())
minHeap1.insertValue(3)
console.log("Should return [ 0, 1, 2, 3 ]: ", minHeap1.getHeapCopy())
minHeap1.insertValue(4)
console.log("Should return [ 0, 1, 2, 3, 4 ]: ", minHeap1.getHeapCopy())
minHeap1.insertValue(-1)
console.log("Should return [ -1, 1, 0, 3, 4, 2 ]: ", minHeap1.getHeapCopy())
minHeap1.removeRootValue()
console.log("Should return [ 0, 1, 2, 3, 4 ]: ", minHeap1.getHeapCopy())
minHeap1.removeRootValue()
console.log("Should return [ 1, 3, 2, 4 ]: ", minHeap1.getHeapCopy())
minHeap1.removeRootValue()
console.log("Should return [ 2, 3, 4 ]: ", minHeap1.getHeapCopy())
minHeap1.removeRootValue()
console.log("Should return [ 3, 4 ]: ", minHeap1.getHeapCopy())
minHeap1.removeRootValue()
console.log("Should return [ 4 ]: ", minHeap1.getHeapCopy())
minHeap1.removeRootValue()
console.log("Should return []: ", minHeap1.getHeapCopy())
const minHeap2 = new MinHeap()
minHeap2.insertValue(4)
console.log("Should return [ 4 ]: ", minHeap2.getHeapCopy())
minHeap2.insertValue(3)
console.log("Should return [ 3, 4 ]: ", minHeap2.getHeapCopy())
minHeap2.insertValue(2)
console.log("Should return [ 2, 4, 3 ]: ", minHeap2.getHeapCopy())
minHeap2.insertValue(1)
console.log("Should return [ 1, 2, 3, 4 ]: ", minHeap2.getHeapCopy())
minHeap2.insertValue(0)
console.log("Should return [ 0, 1, 3, 4, 2 ]: ", minHeap2.getHeapCopy())
minHeap2.insertValue(-1)
console.log("Should return [ -1, 1, 0, 4, 2, 3 ]: ", minHeap2.getHeapCopy())
minHeap2.removeRootValue()
console.log("Should return [ 0, 1, 3, 4, 2 ]: ", minHeap2.getHeapCopy())
minHeap2.removeRootValue()
console.log("Should return [ 1, 2, 3, 4 ]: ", minHeap2.getHeapCopy())
minHeap2.removeRootValue()
console.log("Should return [ 2, 4, 3 ]: ", minHeap2.getHeapCopy())
minHeap2.removeRootValue()
console.log("Should return [ 3, 4 ]: ", minHeap2.getHeapCopy())
minHeap2.removeRootValue()
console.log("Should return [ 4 ]: ", minHeap2.getHeapCopy())
minHeap2.removeRootValue()
console.log("Should return []: ", minHeap2.getHeapCopy())

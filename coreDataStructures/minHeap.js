class MinHeap {
    #minHeap
    constructor() {
        this.#minHeap = []
    }
    
    insertValue(value) {
        this.#minHeap.push(value)
        this._bubbleUp()
        return this.getHeapCopy()
    }

    removeRootValue() {
        if (!this._size()) return this.getHeapCopy()
        this.#minHeap[0] = this.#minHeap[this._size() - 1]
        this.#minHeap.pop()
        this._trickleDown()
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

    _bubbleUp() {
        let currentIdx = this._size() - 1
        while (currentIdx > 0 && this.#minHeap[currentIdx] < this.#minHeap[Math.floor((currentIdx-1)/2)]) {
            this._swap(this.#minHeap, currentIdx, Math.floor((currentIdx-1)/2))
            currentIdx = Math.floor((currentIdx-1)/2)
        }
    }

    _trickleDown() {
        let currentIdx = 0
        while ((2*currentIdx) + 1 < this.#minHeap.length) {
            const leftIdx = (2*currentIdx) + 1
            const rightIdx = (2*currentIdx) + 2
            const minChildIdx = rightIdx < this.#minHeap.length && this.#minHeap[rightIdx] < this.#minHeap[leftIdx] ? rightIdx : leftIdx
            if (this.#minHeap[currentIdx] > this.#minHeap[minChildIdx]) {
                this._swap(this.#minHeap, currentIdx, minChildIdx)
                currentIdx = minChildIdx
            } else {
                break
            }
        }
        return this.getHeapCopy()
    }

    _size() {
        return this.#minHeap.length
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
console.log("Should return [ 0 ]: ", minHeap1.getHeapCopy(), JSON.stringify([0]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.insertValue(1)
console.log("Should return [ 0, 1 ]: ", minHeap1.getHeapCopy(), JSON.stringify([0,1]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.insertValue(2)
console.log("Should return [ 0, 1, 2 ]: ", minHeap1.getHeapCopy(), JSON.stringify([0,1,2]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.insertValue(3)
console.log("Should return [ 0, 1, 2, 3 ]: ", minHeap1.getHeapCopy(), JSON.stringify([0,1,2,3]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.insertValue(4)
console.log("Should return [ 0, 1, 2, 3, 4 ]: ", minHeap1.getHeapCopy(), JSON.stringify([0,1,2,3,4]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.insertValue(-1)
console.log("Should return [ -1, 1, 0, 3, 4, 2 ]: ", minHeap1.getHeapCopy(), JSON.stringify([-1,1,0,3,4,2]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.removeRootValue()
console.log("Should return [ 0, 1, 2, 3, 4 ]: ", minHeap1.getHeapCopy(), JSON.stringify([0,1,2,3,4]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.removeRootValue()
console.log("Should return [ 1, 3, 2, 4 ]: ", minHeap1.getHeapCopy(), JSON.stringify([1,3,2,4]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.removeRootValue()
console.log("Should return [ 2, 3, 4 ]: ", minHeap1.getHeapCopy(), JSON.stringify([2,3,4]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.removeRootValue()
console.log("Should return [ 3, 4 ]: ", minHeap1.getHeapCopy(), JSON.stringify([3,4]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.removeRootValue()
console.log("Should return [ 4 ]: ", minHeap1.getHeapCopy(), JSON.stringify([4]) === JSON.stringify(minHeap1.getHeapCopy()))
minHeap1.removeRootValue()
console.log("Should return []: ", minHeap1.getHeapCopy(), JSON.stringify([]) === JSON.stringify(minHeap1.getHeapCopy()))
const minHeap2 = new MinHeap()
minHeap2.insertValue(4)
console.log("Should return [ 4 ]: ", minHeap2.getHeapCopy(), JSON.stringify([4]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.insertValue(3)
console.log("Should return [ 3, 4 ]: ", minHeap2.getHeapCopy(), JSON.stringify([3,4]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.insertValue(2)
console.log("Should return [ 2, 4, 3 ]: ", minHeap2.getHeapCopy(), JSON.stringify([2,4,3]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.insertValue(1)
console.log("Should return [ 1, 2, 3, 4 ]: ", minHeap2.getHeapCopy(), JSON.stringify([1,2,3,4]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.insertValue(0)
console.log("Should return [ 0, 1, 3, 4, 2 ]: ", minHeap2.getHeapCopy(), JSON.stringify([0,1,3,4,2]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.insertValue(-1)
console.log("Should return [ -1, 1, 0, 4, 2, 3 ]: ", minHeap2.getHeapCopy(), JSON.stringify([-1,1,0,4,2,3]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.removeRootValue()
console.log("Should return [ 0, 1, 3, 4, 2 ]: ", minHeap2.getHeapCopy(), JSON.stringify([0,1,3,4,2]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.removeRootValue()
console.log("Should return [ 1, 2, 3, 4 ]: ", minHeap2.getHeapCopy(), JSON.stringify([1,2,3,4]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.removeRootValue()
console.log("Should return [ 2, 4, 3 ]: ", minHeap2.getHeapCopy(), JSON.stringify([2,4,3]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.removeRootValue()
console.log("Should return [ 3, 4 ]: ", minHeap2.getHeapCopy(), JSON.stringify([3,4]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.removeRootValue()
console.log("Should return [ 4 ]: ", minHeap2.getHeapCopy(), JSON.stringify([4]) === JSON.stringify(minHeap2.getHeapCopy()))
minHeap2.removeRootValue()
console.log("Should return []: ", minHeap2.getHeapCopy(), JSON.stringify([]) === JSON.stringify(minHeap2.getHeapCopy()))

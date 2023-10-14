class MinHeap {
    #minHeap
    constructor(array = []) {
        this.#minHeap = this.heapify(array)
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
        this._trickleDown(this.#minHeap)
        return this.getHeapCopy()
    }

    heapify(arr, idx = 0) {
        if (arr.length < 2) return arr
        while (this._trickleDown(arr, idx)) {
            continue
        }
        const leftChildIdx = (2*idx) + 1
        const rightChildIdx = (2*idx) + 2
        if (leftChildIdx < arr.length) this.heapify(arr, leftChildIdx)
        if (rightChildIdx < arr.length) this.heapify(arr, rightChildIdx)
        return arr
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

    _trickleDown(arr, idx = 0) {
        let currentIdx = idx
        let trickled = false
        while ((2*currentIdx) + 1 < arr.length) {
            const leftIdx = (2*currentIdx) + 1
            const rightIdx = (2*currentIdx) + 2
            const minChildIdx = rightIdx < arr.length && arr[rightIdx] < arr[leftIdx] ? rightIdx : leftIdx
            if (arr[currentIdx] > arr[minChildIdx]) {
                this._swap(arr, currentIdx, minChildIdx)
                trickled = true
                currentIdx = minChildIdx
            } else {
                break
            }
        }
        return trickled
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
const minHeap3 = new MinHeap([7,6,5,4,3,2,1])
console.log("Should return [1,3,2,4,6,5,7]", minHeap3.getHeapCopy(), JSON.stringify([1,3,2,4,6,5,7]) === JSON.stringify(minHeap3.getHeapCopy()))
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
        const leftChildIdx = this._getLeftChildIndex(idx)
        const rightChildIdx = this._getRightChildIndex(idx)
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
        while (this._hasParent(currentIdx) && this.#minHeap[currentIdx] < this._parent(this.#minHeap, currentIdx)) {
            this._swap(this.#minHeap, currentIdx, this._getParentIndex(currentIdx))
            currentIdx = this._getParentIndex(currentIdx)
        }
    }

    _trickleDown(arr, idx = 0) {
        let currentIdx = idx
        let trickled = false
        while (this._hasLeftChild(arr, currentIdx)) {
            let smallerChildIndex = this._getLeftChildIndex(currentIdx)
            if (this._hasRightChild(arr, currentIdx) && this._rightChild(arr, currentIdx) < this._leftChild(arr, currentIdx)) {
                smallerChildIndex = this._getRightChildIndex(currentIdx)
            }
            if (arr[currentIdx] > arr[smallerChildIndex]) {
                this._swap(arr, currentIdx, smallerChildIndex)
                trickled = true
                currentIdx = smallerChildIndex
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

    _getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1
    }

    _getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2
    }

    _getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    _hasLeftChild(arr, index) {
        return this._getLeftChildIndex(index) < arr.length
    }

    _hasRightChild(arr, index) {
        return this._getRightChildIndex(index) < arr.length
    }

    _hasParent(index) {
        return this._getParentIndex(index) >= 0
    }

    _leftChild(arr, index) {
        return arr[this._getLeftChildIndex(index)]
    }

    _rightChild(arr, index) {
        return arr[this._getRightChildIndex(index)]
    }

    _parent(arr, index) {
        return arr[this._getParentIndex(index)]
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
console.log("========== TESTS FOR removeRootValue ==========")
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
console.log("========== TESTS FOR insertValue ==========")
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
console.log("========== TESTS FOR removeRootValue ==========")
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
console.log("========== TESTS FOR heapify ==========")
const minHeap3 = new MinHeap([7,6,5,4,3,2,1])
console.log("Should return [1,3,2,4,6,5,7]", minHeap3.getHeapCopy(), JSON.stringify([1,3,2,4,6,5,7]) === JSON.stringify(minHeap3.getHeapCopy()))
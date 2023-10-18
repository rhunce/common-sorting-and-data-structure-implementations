class MaxHeap {
    #maxHeap
    constructor(arr = []) {
        this.#maxHeap = this._heapify(arr)
    }

    insertValue(value) {
        this.#maxHeap.push(value)
        this._bubbleUp(this.#maxHeap, this.size() - 1)
        return this.getHeapCopy()
    }

    removeRootValue() {
        if (this.size() < 1) return null
        this.#maxHeap[0] = this.#maxHeap[this.size() - 1]
        this.#maxHeap.pop()
        this._trickleDown(this.#maxHeap, 0)
        return this.getHeapCopy()
    }

    getHeapCopy(arr = this.#maxHeap) {
        return arr.slice(0)
    }

    size(arr = this.#maxHeap) {
        return arr.length
    }

    _heapify(arr, idx = 0) {
        if (arr.length < 2) return arr
        while (this._hasLeftChild(arr, idx) && this._leftChild(arr, idx) > arr[idx] || this._hasRightChild(arr, idx) && this._rightChild(arr, idx) > arr[idx]) {
            this._trickleDown(arr, idx)
        }
        if (this._hasLeftChild(arr, idx)) this._trickleDown(arr, this._getLeftChildIdx(idx))
        if (this._hasRightChild(arr, idx)) this._trickleDown(arr, this._getRightChildIdx(idx))
        return this.getHeapCopy(arr)
    }

    _bubbleUp(arr, idx) {
        let currentIdx = idx
        while (this._hasParent(currentIdx) && arr[currentIdx] > arr[this._getParentIdx(currentIdx)]) {
            this._swap(arr, currentIdx, this._getParentIdx(currentIdx))
            currentIdx = this._getParentIdx(currentIdx)
        }
        return this.getHeapCopy()
    }

    _trickleDown(arr, idx) {
        let currentIdx = idx
        while (this._hasLeftChild(arr, currentIdx)) {
            let largerChildIdx = this._getLeftChildIdx(currentIdx)
            if (this._hasRightChild(arr, currentIdx) && this._rightChild(arr, currentIdx) > arr[largerChildIdx]) {
                largerChildIdx = this._getRightChildIdx(currentIdx)
            }
            if (arr[currentIdx] < arr[largerChildIdx]) {
                this._swap(arr, currentIdx, largerChildIdx)
                currentIdx = largerChildIdx
            } else {
                break
            }
        }
        return this.getHeapCopy(arr)
    }

    _swap(arr, idxOne, idxTwo) {
        const temp = arr[idxOne]
        arr[idxOne] = arr[idxTwo]
        arr[idxTwo] = temp
    }

    _getLeftChildIdx(idx) {
        return (2 * idx) + 1
    }

    _getRightChildIdx(idx) {
        return (2 * idx) + 2
    }

    _getParentIdx(idx) {
        return Math.floor((idx - 1) / 2)
    }

    _hasLeftChild(arr, idx) {
        return this._getLeftChildIdx(idx) < this.size(arr)
    }

    _hasRightChild(arr, idx) {
        return this._getRightChildIdx(idx) < this.size(arr)
    }

    _hasParent(idx) {
        return idx > 0
    }

    _leftChild(arr, idx) {
        return arr[this._getLeftChildIdx(idx)]
    }

    _rightChild(arr, idx) {
        return arr[this._getRightChildIdx(idx)]
    }

    _parent(arr, idx) {
        return arr[this._getParentIdx(idx)]
    }
}


// TEST CASES
function runMaxHeapTests() {
    console.log("========== TESTS FOR insertValue ==========")
    const maxHeap1 = new MaxHeap()
    maxHeap1.insertValue(0)
    console.log("Should return [ 0 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([0]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.insertValue(1)
    console.log("Should return [ 1, 0 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([1,0]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.insertValue(2)
    console.log("Should return [ 2, 0, 1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([2,0,1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.insertValue(3)
    console.log("Should return [ 3, 2, 1, 0 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([3,2,1,0]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.insertValue(4)
    console.log("Should return [ 4, 3, 1, 0, 2 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([4,3,1,0,2]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.insertValue(-1)
    console.log("Should return [ 4, 3, 1, 0, 2, -1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([4,3,1,0,2,-1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    console.log("========== TESTS FOR removeRootValue ==========")
    maxHeap1.removeRootValue()
    console.log("Should return [ 3, 2, 1, 0, -1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([3,2,1,0,-1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.removeRootValue()
    console.log("Should return [ 2, 0, 1, -1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([2,0,1,-1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.removeRootValue()
    console.log("Should return [ 1, 0, -1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([1,0,-1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.removeRootValue()
    console.log("Should return [ 0, -1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([0,-1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.removeRootValue()
    console.log("Should return [ -1 ]: ", maxHeap1.getHeapCopy(), JSON.stringify([-1]) === JSON.stringify(maxHeap1.getHeapCopy()))
    maxHeap1.removeRootValue()
    console.log("Should return []: ", maxHeap1.getHeapCopy(), JSON.stringify([]) === JSON.stringify(maxHeap1.getHeapCopy()))
    console.log("========== TESTS FOR insertValue ==========")
    const maxHeap2 = new MaxHeap()
    maxHeap2.insertValue(4)
    console.log("Should return [ 4 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([4]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.insertValue(3)
    console.log("Should return [ 4, 3 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([4,3]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.insertValue(2)
    console.log("Should return [ 4, 3, 2 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([4,3,2]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.insertValue(1)
    console.log("Should return [ 4, 3, 2, 1 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([4,3,2,1]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.insertValue(0)
    console.log("Should return [ 4, 3, 2, 1, 0 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([4,3,2,1,0]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.insertValue(-1)
    console.log("Should return [ 4, 3, 2, 1, 0, -1 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([4,3,2,1,0,-1]) === JSON.stringify(maxHeap2.getHeapCopy()))
    console.log("========== TESTS FOR removeRootValue ==========")
    maxHeap2.removeRootValue()
    console.log("Should return [ 3, 1, 2, -1, 0 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([3,1,2,-1,0]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.removeRootValue()
    console.log("Should return [ 2, 1, 0, -1 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([2,1,0,-1]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.removeRootValue()
    console.log("Should return [ 1, -1, 0 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([1,-1,0]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.removeRootValue()
    console.log("Should return [ 0, -1 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([0,-1]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.removeRootValue()
    console.log("Should return [ -1 ]: ", maxHeap2.getHeapCopy(), JSON.stringify([-1]) === JSON.stringify(maxHeap2.getHeapCopy()))
    maxHeap2.removeRootValue()
    console.log("Should return []: ", maxHeap2.getHeapCopy(), JSON.stringify([]) === JSON.stringify(maxHeap2.getHeapCopy()))
    console.log("========== TESTS FOR heapify ==========")
    const maxHeap3 = new MaxHeap([1,2,3,4,5,6,7])
    console.log("Should return [ 7, 5, 6, 4, 2, 3, 1 ]", maxHeap3.getHeapCopy(), JSON.stringify([7,5,6,4,2,3,1]) === JSON.stringify(maxHeap3.getHeapCopy()))
}
// runMaxHeapTests()
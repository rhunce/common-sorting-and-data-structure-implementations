// NOTE: This is a stable sorting algorithm, meaning the order of elements having the same value is maintained.
// O(n log n) time | O(log n) space
function mergeSort(numbers) {
    // DIVIDE
    if (numbers.length < 2) return numbers
    const halfIdx = Math.floor(numbers.length / 2)
    const leftHalf = numbers.slice(0, halfIdx)
    const rightHalf = numbers.slice(halfIdx)

    const sortedLeftHalf = mergeSort(leftHalf)
    const sortedRightHalf = mergeSort(rightHalf)

    // MERGE
    const sortedArray = []
    let left = 0
    let right = 0

    while (left < sortedLeftHalf.length && right < sortedRightHalf.length) {
        if (sortedLeftHalf[left] <= sortedRightHalf[right]) {
            sortedArray.push(sortedLeftHalf[left])
            left++
        } else {
            sortedArray.push(sortedRightHalf[right])
            right++
        }
    }

    while (left < sortedLeftHalf.length) {
        sortedArray.push(sortedLeftHalf[left])
        left++
    }

    while (right < sortedRightHalf.length) {
        sortedArray.push(sortedRightHalf[right])
        right++
    }

    return sortedArray
}

// ALTERNATIVE SOLUTION
// O(n log n) time ... O(n^2) time for shift method? | O(n) space
function mergeSort(numbers) {
    if (numbers.length < 2) return numbers
    const halfIdx = Math.floor(numbers.length / 2)
    const leftHalf = numbers.slice(0, halfIdx)
    const rightHalf = numbers.slice(halfIdx)

    return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

function merge(leftArr, rightArr) {
    const sortedArray = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArray.push(leftArr.shift())
        } else {
            sortedArray.push(rightArr.shift())
        }
    }

    return [...sortedArray, ...leftArr, ...rightArr]
}

// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(mergeSort([]))
console.log(mergeSort([-1.8]))
console.log(mergeSort([2]))
console.log(mergeSort([2, 1]))
console.log(mergeSort([1, 5, 2]))
console.log(mergeSort([-1, -2, -5]))
console.log(mergeSort([3, 3, 3, 3, 3]))
console.log(mergeSort([5, 4, 3, 2, 1]))
console.log(mergeSort([-1, -2, -3, -4, -5]))
console.log(mergeSort([5, 1, 2, 3, 4]))
console.log(mergeSort([500, 400, 300, 200, 100]))
console.log(mergeSort([-7, -2, 0, 1, 2, 3, 4, 5]))
console.log(mergeSort([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))
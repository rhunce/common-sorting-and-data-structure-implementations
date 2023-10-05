// O() time | O() space

// numbers = [38, 27, 43, 10]
function mergeSort(numbers, startIdx = 0, endIdx = numbers.length - 1) {
    if (numbers.length < 2) return
    const halfIdx = Math.floor(numbers.length / 2)
    const leftHalf = numbers.slice(startIdx, halfIdx)
    const rightHalf = numbers.slice(halfIdx, endIdx + 1)

    mergeSort(leftHalf)
    mergeSort(rightHalf)

    // ... merging process ... here?

    return numbers
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
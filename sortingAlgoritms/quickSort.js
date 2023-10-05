function quickSort(numbers, start = 0, end = numbers.length - 1) {
    if (numbers.length < 2) return numbers
    if (start >= end) return

    const partitionIndex = lomutoPartition(numbers, start, end)

    quickSort(numbers, start, partitionIndex - 1)
    quickSort(numbers, partitionIndex + 1, end)

    return numbers
}

// HELPERS
// Takes element at pivotIdx (last index), and effectively puts it in middle 
// of numbers array with all smaller or equal numbers to the left of it and all
// larger numbers to the right of it.
// Note: Lomuto partition scheme
function lomutoPartition(numbers, start, end) {
    const pivotValue = numbers[end]
    let pivotIndex = start

    for (let currentIndex = start; currentIndex < end; currentIndex++) {
        if (numbers[currentIndex] <= pivotValue) {
            swap(numbers, pivotIndex, currentIndex)
            pivotIndex++
        }
    }
    swap(numbers, pivotIndex, end)
    return pivotIndex
}

function swap(numbers, idxOne, idxTwo) {
    const temp = numbers[idxOne]
    numbers[idxOne] = numbers[idxTwo]
    numbers[idxTwo] = temp
}

// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(quickSort([]))
console.log(quickSort([-1.8]))
console.log(quickSort([2]))
console.log(quickSort([2, 1]))
console.log(quickSort([1, 5, 2]))
console.log(quickSort([-1, -2, -5]))
console.log(quickSort([5, 1, 2, 3, 4]))
console.log(quickSort([500, 400, 300, 200, 100]))
console.log(quickSort([-7, -2, 0, 1, 2, 3, 4, 5]))
console.log(quickSort([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))
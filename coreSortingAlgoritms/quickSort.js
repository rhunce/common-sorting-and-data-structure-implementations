// NOTE: This is a non-stable sorting algorithm, meaning the order of elements having the same value is not maintained.
// O(n log n) time (average, best) | O (log n) space
// O(n^2) time (worst case) | O (log n) space
function quickSortLomuto(numbers, start = 0, end = numbers.length - 1) {
    if (numbers.length < 2) return numbers
    if (start >= end) return

    const partitionIndex = lomutoPartition(numbers, start, end)

    quickSortLomuto(numbers, start, partitionIndex - 1)
    quickSortLomuto(numbers, partitionIndex + 1, end)

    return numbers
}

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

// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(quickSortLomuto([]))
console.log(quickSortLomuto([-1.8]))
console.log(quickSortLomuto([2]))
console.log(quickSortLomuto([2, 1]))
console.log(quickSortLomuto([1, 5, 2]))
console.log(quickSortLomuto([-1, -2, -5]))
console.log(quickSortLomuto([3, 3, 3, 3, 3]))
console.log(quickSortLomuto([5, 4, 3, 2, 1]))
console.log(quickSortLomuto([-1, -2, -3, -4, -5]))
console.log(quickSortLomuto([5, 1, 2, 3, 4]))
console.log(quickSortLomuto([500, 400, 300, 200, 100]))
console.log(quickSortLomuto([-7, -2, 0, 1, 2, 3, 4, 5]))
console.log(quickSortLomuto([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))

// O(n log n) time (average, best) | O (log n) space
// O(n^2) time (worst case) | O (log n) space
function quickSortHoare(numbers, start = 0, end = numbers.length - 1) {
    if (numbers.length < 2) return numbers
    if (start < end) {
        const partitionIndex = hoarePartition(numbers, start, end)
        quickSortHoare(numbers, start, partitionIndex - 1)
        quickSortHoare(numbers, partitionIndex, end)
    
        return numbers
    }

}

// Note: Hoare partition scheme
function hoarePartition(numbers, start, end) {
    const pivotValue = numbers[Math.floor((start + end) / 2)]
    while (start <= end) {
        while(numbers[start] < pivotValue) {
            start++
        }
        while(numbers[end] > pivotValue) {
            end--
        }
        if (start <= end) {
            swap(numbers, start, end)
            start++
            end--
        }
    }
    return start
}

// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(quickSortHoare([]))
console.log(quickSortHoare([-1.8]))
console.log(quickSortHoare([2]))
console.log(quickSortHoare([2, 1]))
console.log(quickSortHoare([1, 5, 2]))
console.log(quickSortHoare([-1, -2, -5]))
console.log(quickSortHoare([3, 3, 3, 3, 3]))
console.log(quickSortHoare([5, 4, 3, 2, 1]))
console.log(quickSortHoare([-1, -2, -3, -4, -5]))
console.log(quickSortHoare([5, 1, 2, 3, 4]))
console.log(quickSortHoare([500, 400, 300, 200, 100]))
console.log(quickSortHoare([-7, -2, 0, 1, 2, 3, 4, 5]))
console.log(quickSortHoare([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))

function swap(numbers, idxOne, idxTwo) {
    const temp = numbers[idxOne]
    numbers[idxOne] = numbers[idxTwo]
    numbers[idxTwo] = temp
}

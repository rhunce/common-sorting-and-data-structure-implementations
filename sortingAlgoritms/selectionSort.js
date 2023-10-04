// O(n^2) time | O(1) space
function selectionSort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        const idxOfMinNumber = getIdxOfMinNumber(numbers, i)
        if (i !== idxOfMinNumber) {
            swap(numbers, i, idxOfMinNumber)
        }
    }
    return numbers
}

// HELPERS
function getIdxOfMinNumber(numbers, startIdx) {
    let currentMinNumIdx = startIdx
    for (let i = startIdx + 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[currentMinNumIdx]) {
            currentMinNum = numbers[i]
            currentMinNumIdx = i
        }
    }
    return currentMinNumIdx
}

function swap(numbers, idxOne, idxTwo) {
    const temp = numbers[idxTwo]
    numbers[idxTwo] = numbers[idxOne]
    numbers[idxOne] = temp
}

// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(selectionSort([]))
console.log(selectionSort([-1.8]))
console.log(selectionSort([2]))
console.log(selectionSort([1, 5, 2]))
console.log(selectionSort([-1, -2, -5]))
console.log(selectionSort([5, 1, 2, 3, 4]))
console.log(selectionSort([500, 400, 300, 200, 100]))
console.log(selectionSort([-7, -2, 0, 1, 2, 3, 4, 5]))
console.log(selectionSort([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))
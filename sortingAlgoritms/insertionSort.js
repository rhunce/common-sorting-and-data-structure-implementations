// O(n^2) time | O(1) space
function insertionSort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i - 1]) {
            insertValInCorrectPositionToLeft(numbers, i)
        }
    }
    return numbers
}

// HELPERS
function insertValInCorrectPositionToLeft(numbers, currentEndIdx) {
    for (let i = 0; i < currentEndIdx; i++) {
        if (numbers[currentEndIdx] < numbers[i]) {
            const valueToMove = numbers.splice(currentEndIdx, 1)[0]
            numbers.splice(i, 0, valueToMove)
            break
        }
    }
}

// Solution with constraint
// Constraint: Don't use .splice() or any other native JavaScript methods
// O(n^2) time | O(1) space
function insertionSort(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        const currentValue = numbers[i]
        let currentIdx = i
        while (currentIdx > 0 && numbers[currentIdx - 1] > currentValue) {
            numbers[currentIdx] = numbers[currentIdx - 1]
            currentIdx--
        }
        numbers[currentIdx] = currentValue
    }

    return numbers
}


// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(insertionSort([]))
console.log(insertionSort([-1.8]))
console.log(insertionSort([2]))
console.log(insertionSort([1, 5, 2]))
console.log(insertionSort([-1, -2, -5]))
console.log(insertionSort([5, 1, 2, 3, 4]))
console.log(insertionSort([500, 400, 300, 200, 100]))
console.log(insertionSort([-7, -2, 0, 1, 2, 3, 4, 5]))
console.log(insertionSort([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))
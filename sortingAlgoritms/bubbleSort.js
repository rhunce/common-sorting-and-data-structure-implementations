// O(n^2) time | O(1) space
function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let swapMade = false
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                swap(numbers, j, j + 1)
                swapMade = true
            }
        }
        if (!swapMade) break
    }

    return numbers
}

// HELPERS
function swap(numbers, i, j) {
    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
}

// TEST CASES (ASSUMES ONLY NUMBERS IN ARRAY)
console.log(bubbleSort([]))
console.log(bubbleSort([-1.8]))
console.log(bubbleSort([2]))
console.log(bubbleSort([1, 5, 2]))
console.log(bubbleSort([-1, -2, -5]))
console.log(bubbleSort([-1.8, 4, 2.55, 0, 5, 1, -2, 3]))
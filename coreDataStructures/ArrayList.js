class ArrayList {
    #items
    #count
    constructor(initialSize = 1) {
        this.#items = new Array(initialSize)
        this.#count = 0
    }

    // O(1) time, amortizing | O(1) space
    append(item) {
        if (this.size() === this.capacity()) {
            console.log(`Current size is ${this.#count}. Resizing to ${this.#count * 2}.`)
            this._doubleArraySize()
        }
        this.#items[this.#count] = item
        this.#count++
    }

    // O(1) time | O(1) space
    set(index, item) {
        const outOfRange = this._returnErrorIfOutOfRange(index)
        if (outOfRange) return outOfRange
        this.#items[index] = item
        return this.#items[index]
    }

    // O(1) time | O(1) space
    get(index) {
        const outOfRange = this._returnErrorIfOutOfRange(index)
        if (outOfRange) return outOfRange
        return this.#items[index]
    }

    // O(n) time | O(n) space
    // n = length of current ArrayList
    getCopyOfItems() {
        return this.#items.slice(0)
    }

    // O(1) time | O(1) space
    size() {
        return this.#count
    }

    // O(1) time | O(1) space
    capacity() {
        return this.#items.length
    }

    // O(n) time | O(n) space
    // n = length of current ArrayList
    _doubleArraySize() {
        const bigger = new Array(this.#count * 2)
        for (let i = 0; i < this.capacity(); i++) {
            bigger[i] = this.#items[i]
        }
        this.#items = bigger
    }

    // O(1) time | O(1) space
    _returnErrorIfOutOfRange(index) {
        if (index < 0 || index > this.#count) {
            return "Index out of range"
        }
    }
}

// TEST CASES
function runArrayListTests() {
    const arrayList = new ArrayList(5)
    console.log("========== TESTS FOR append ==========")
    arrayList.append("A")
    arrayList.append("B")
    arrayList.append("C")
    arrayList.append("D")
    arrayList.append("E")
    console.log("Test 1: ", JSON.stringify(arrayList.getCopyOfItems()) === JSON.stringify(["A","B","C","D","E"]) ? "PASS" : "FAIL")
    console.log("========== TESTS FOR get ==========")
    console.log("Test 2: ", arrayList.get(0) === "A" ? "PASS" : "FAIL")
    console.log("Test 3: ", arrayList.get(1) === "B" ? "PASS" : "FAIL")
    console.log("Test 4: ", arrayList.get(2) === "C" ? "PASS" : "FAIL")
    console.log("Test 5: ", arrayList.get(3) === "D" ? "PASS" : "FAIL")
    console.log("Test 6: ", arrayList.get(4) === "E" ? "PASS" : "FAIL")
    console.log("========== TESTS FOR set ==========")
    console.log("Test 7: ", arrayList.set(0, "a") === "a" ? "PASS" : "FAIL")
    console.log("Test 8: ", arrayList.set(1, "b") === "b" ? "PASS" : "FAIL")
    console.log("Test 9: ", arrayList.set(2, "c") === "c" ? "PASS" : "FAIL")
    console.log("Test 10: ", arrayList.set(3, "d") === "d" ? "PASS" : "FAIL")
    console.log("Test 11: ", arrayList.set(4, "e") === "e" ? "PASS" : "FAIL")
    console.log("Test 12: ", JSON.stringify(arrayList.getCopyOfItems()) === JSON.stringify(["a","b","c","d","e"]) ? "PASS" : "FAIL")
    console.log("========== TESTS FOR size and capacity ==========")
    console.log("Test 13: ", arrayList.size() === 5 ? "PASS" : "FAIL")
    console.log("Test 14: ", arrayList.capacity() === 5 ? "PASS" : "FAIL")
    arrayList.append("F")
    console.log("Test 15: ", arrayList.size() === 6 ? "PASS" : "FAIL")
    console.log("Test 16: ", arrayList.capacity() === 10 ? "PASS" : "FAIL")
}
runArrayListTests()
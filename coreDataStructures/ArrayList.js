class ArrayList {
    constructor(initialSize) {
        this.items = new Array(initialSize)
        this.count = 0
    }

    append(item) {
        if (this.count === this.items.length) {
            console.log(`Current size is ${this.count}. Resizing to ${this.count * 2}.`)
            const bigger = new Array(this.count * 2)
            for (let i = 0; i < this.items.length; i++) {
                bigger[i] = this.items[i]
            }
            this.items = bigger
        }
        this.items[this.count] = item
        this.count++
    }

    set(index, item) {
        const outOfRange = this._returnErrorIfOutOfRange(index)
        if (!!outOfRange) {
            return outOfRange
        }
        this.items[index] = item
        return this.items[index]
    }

    get(index) {
        const outOfRange = this._returnErrorIfOutOfRange(index)
        if (!!outOfRange) {
            return outOfRange
        }
        return this.items[index]
    }

    getCopyOfItems() {
        return this.items.slice(0)
    }

    remove(index) {
        // TODO
    }

    clear() {
        // TODO
    }

    size() {
        return this.count
    }

    _returnErrorIfOutOfRange(index) {
        if (index < 0 || index > this.count) {
            return "Index out of range"
        }
    }
}

// TEST CASES
const arrayList = new ArrayList(5)
console.log("========== TESTS FOR append ==========")
arrayList.append("A")
arrayList.append("B")
arrayList.append("C")
arrayList.append("D")
arrayList.append("E")
console.log("Should return ['A', 'B', 'C', 'D', 'E']: ", arrayList.getCopyOfItems())
console.log("========== TESTS FOR get ==========")
console.log("Should return 'A': ", arrayList.get(0))
console.log("Should return 'B': ", arrayList.get(1))
console.log("Should return 'C': ", arrayList.get(2))
console.log("Should return 'D': ", arrayList.get(3))
console.log("Should return 'E': ", arrayList.get(4))


class ArrayList {
    constructor(initialSize) {
        this.items = new Array(initialSize)
        this.count = 0
    }

    get(index) {
        _throwErrorIfOutOfRange(index)
        return this.items[index]
    }

    set(index, item) {
        _throwErrorIfOutOfRange(index)
        this.items[index] = item
        return this.items[index]
    }

    size() {
        return this.count
    }

    append(item) {
        if (this.count >= this.items.length) {
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

    _throwErrorIfOutOfRange(index) {
        if (index < 0 || index >= this.count) {
            throw Error("Index out of range")
        }
    }
}

// TEST CASES
console.log("========== TESTS FOR <method> ==========")
function arrayListTest() {
    const numbers = new ArrayList(5)
    for (let i = 0; i < 50; i++) {
        numbers.append(i)
        console.log(`Number ${i}`)
    }
    console.log("numbers: ", numbers)
}
console.log(arrayListTest())
class HashTable {
    constructor() {
        this.table = new Array(127)
        this.size = 0
    }

    set(key, value) {
        const keyIdx = this._hash(key)
        if (!this.table[keyIdx]) {
            this.table[keyIdx] = []
        }
        const keyValuePairExists = this.table[keyIdx].find(valueAtKey => valueAtKey[0] === key)
        if (!keyValuePairExists) {
            this.table[keyIdx].push([key, value])
            this.size++
        }
    }

    get(key) {
        const keyIdx = this._hash(key)
        if (this.table[keyIdx]) {
            return this._getValueForKey(key, this.table[keyIdx])
        }
        return null
    }

    remove() {
        // ...
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    _getValueForKey(key, keyValues) {
        return keyValues.find(keyValue => keyValue[0] === key)?.[1]
    }
      
}

// TEST CASES
console.log("========== TESTS FOR set AND get methods ==========")
const hashTable = new HashTable()
hashTable.set("A1", "A2")
console.log("Should return A2: ", hashTable.get("A1"))
hashTable.set("B1", "B2")
console.log("Should return B2: ", hashTable.get("B1"))
hashTable.set("C1", "C2")
console.log("Should return C2: ", hashTable.get("C1"))
console.log("Should return 3: ", hashTable.size)
hashTable.set("C1", "C2")
console.log("Should return C2: ", hashTable.get("C1"))
console.log("Should return 3: ", hashTable.size)
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
        const targetKeyValuePair = this.table[keyIdx].find(valueAtKey => valueAtKey[0] === key)
        if (!targetKeyValuePair) {
            this.table[keyIdx].push([key, value])
            this.size++
            return
        }
        targetKeyValuePair[1] = value
    }

    get(key) {
        const keyIdx = this._hash(key)
        return this._getValueForKey(key, this.table[keyIdx] || [])
    }

    remove(key) {
        const keyIdx = this._hash(key)
        const keyValuePairs = this.table[keyIdx]
        return this._deleteKeyValuePair(key, keyValuePairs || [])
    }

    display() {
        this.table.forEach((values, index) => {
          const chainedValues = values.map(
            ([key, value]) => `[ ${key}: ${value} ]`
          );
          console.log(`${index}: ${chainedValues}`);
        });
      }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.table.length
    }

    _getValueForKey(key, keyValues) {
        return keyValues.find(keyValue => keyValue[0] === key)?.[1] || null
    }

    _deleteKeyValuePair(key, keyValuePairs) {
        for (let i = 0; i < keyValuePairs.length; i++) {
            if (keyValuePairs[i][0] === key) {
                this.size--
                return keyValuePairs.splice(i, 1)[0]
            }
        }
        return null
    }
      
}

// TEST CASES
function runHashTableTests() {
    console.log("========== TESTS FOR set AND get methods ==========")
    const hashTable = new HashTable()
    hashTable.set("A1", "A2")
    console.log("Should return A2: ", hashTable.get("A1"))
    hashTable.set("B1", "B2")
    console.log("Should return B2: ", hashTable.get("B1"))
    hashTable.set("C1", "C2")
    console.log("Should return C2: ", hashTable.get("C1"))
    console.log("Should return 3: ", hashTable.size)
    hashTable.set("C1", "C3")
    console.log("Should return C3: ", hashTable.get("C1"))
    console.log("Should return 3: ", hashTable.size)
    console.log("========== TESTS FOR remove method ==========")
    console.log("Should return [C1, C3]: ", hashTable.remove("C1"))
    console.log("Should return 2: ", hashTable.size)
    console.log("Should return null: ", hashTable.get("C1"))
    console.log("========== TESTS FOR display method ==========")
    console.log("Should print 114: [ A1: A2 ], 115: [ B1: B2 ], 116: ")
    hashTable.display()
}
// runHashTableTests()
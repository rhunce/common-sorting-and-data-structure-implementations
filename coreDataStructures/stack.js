class Stack {
    #stack
    constructor() {
        this.#stack = []
    }

    push(value) {
        this.#stack.push(value)
        return this.peek()
    }

    pop() {
        return this.#stack.pop()
    }

    peek() {
        return this.#stack[this.size() - 1]
    }

    size() {
        return this.#stack.length
    }
}

// TEST CASES
console.log("========== TESTS FOR Stack ==========")
const stack = new Stack()
console.log("Should return 1: ", stack.push(1))
console.log("Should return 2: ", stack.push(2))
console.log("Should return 3: ", stack.push(3))
console.log("Should return 3: ", stack.size())
console.log("Should return 3: ", stack.peek())
console.log("Should return 3: ", stack.pop())
console.log("Should return 2: ", stack.size())
console.log("Should return 2: ", stack.peek())
console.log("Should return 2: ", stack.pop())
console.log("Should return 1: ", stack.size())
console.log("Should return 1: ", stack.peek())
console.log("Should return 1: ", stack.pop())
console.log("Should return 0: ", stack.size())
console.log("Should return undefined: ", stack.peek())

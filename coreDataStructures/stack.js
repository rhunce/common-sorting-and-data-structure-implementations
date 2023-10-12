class Stack {
    #stack
    constructor() {
        // can use linked list here (that includes a pointer to tail)
        // for more efficient memory allocation
        this.#stack = []
    }

    push(value) {
        this.#stack.push(value)
        return this.peek()
    }

    pop() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        return this.#stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        return this.#stack[this.size() - 1]
    }

    size() {
        return this.#stack.length
    }

    isEmpty() {
        return this.size() === 0
    }

    printStack() {
        if (this.isEmpty()) {
            console.log(Stack.EMPTY_STACK)
        }
        for (const el of this.#stack) {
            console.log(el)
        }
    }
}
Stack.EMPTY_STACK = Symbol("Stack is empty")

// TEST CASES
console.log("========== TESTS FOR Stack ==========")
const stack = new Stack()
console.log("Should return true: ", stack.isEmpty())
console.log("Should return 1: ", stack.push(1))
console.log("Should return 2: ", stack.push(2))
console.log("Should return 3: ", stack.push(3))
console.log("Should print 1 2 3")
stack.printStack()
console.log("Should return 3: ", stack.size())
console.log("Should return 3: ", stack.peek())
console.log("Should return 3: ", stack.pop())
console.log("Should return 2: ", stack.size())
console.log("Should return 2: ", stack.peek())
console.log("Should return 2: ", stack.pop())
console.log("Should return 1: ", stack.size())
console.log("Should return 1: ", stack.peek())
console.log("Should return false: ", stack.isEmpty())
console.log("Should return 1: ", stack.pop())
console.log("Should return true: ", stack.isEmpty())
console.log("Should return 0: ", stack.size())
console.log("Should return Stack is empty: ", stack.peek())
console.log("Should print Stack is empty")
stack.printStack()

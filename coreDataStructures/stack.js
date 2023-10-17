class Stack {
    #stack
    constructor() {
        // can use a doubly linked list here (that includes a pointer to tail)
        // for more efficient memory allocation
        this.#stack = []
    }

    // O(1) time | O(1) space
    push(value) {
        this.#stack.push(value)
        return this.peek()
    }

    // O(1) time | O(1) space
    pop() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        return this.#stack.pop()
    }

    // O(1) time | O(1) space
    peek() {
        if (this.isEmpty()) {
            return Stack.EMPTY_STACK
        }
        return this.#stack[this.size() - 1]
    }

    // O(1) time | O(1) space
    size() {
        return this.#stack.length
    }

    // O(1) time | O(1) space
    isEmpty() {
        return this.size() === 0
    }

    // O(1) time | O(1) space
    printStack() {
        if (this.isEmpty()) {
            console.log(Stack.EMPTY_STACK)
            return
        }
        console.log(this.#stack)
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
console.log("Should print [ 1, 2, 3 ]")
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

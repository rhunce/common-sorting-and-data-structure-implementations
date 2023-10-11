class Node {
    constructor(value) {
        this.value = value
        this.adjacents = []
    }

    addAdjacent(node) {
        if (!this.adjacents.includes(node)) {
            this.adjacents.push(node)
        }
    }

    removeAdjacent(node) {
        for (let i = 0; i < this.adjacents.length; i++) {
            if (this.adjacents[i] === node) {
                this.adjacents.splice(i, 1)
            }
        }
    }

    getAdjacents() {
        return this.adjacents
    }

    isAdjacent(node) {
        return !!this.adjacents.find(adjacent => adjacent === node)
    }
}


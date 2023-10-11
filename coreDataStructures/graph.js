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
        const nodeIdx = this.adjacents.indexOf(node)
        if (nodeIdx !== -1) {
            this.adjacents.splice(nodeIdx, 1)
            return node
        }
    }

    getAdjacents() {
        return this.adjacents
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) !== -1
    }
}

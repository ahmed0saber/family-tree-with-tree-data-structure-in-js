class FamilyMember {
    constructor({ name, birth_year, parent }) {
        this.name = name
        this.birth_year = birth_year
        this.parent = parent
        this.children = []
    }

    getParent() {
        return this.parent
    }

    getChildren() {
        return this.children
    }
}

class FamilyTree {
    constructor() {
        this.root = null
    }

    addFamilyMember({ name, birth_year, parent }) {
        const familyMember = new FamilyMember({ name, birth_year, parent })
        if (parent === null) {
            this.root = familyMember
        } else {
            parent.children.push(familyMember)
        }

        return familyMember
    }

    display(node = this.root, depth = 0) {
        if (node === null) {
            return
        }

        const indentation = "-".repeat(depth * 2) + " ".repeat(Math.min(1, depth))
        console.log(`${indentation}${node.name} (${node.birth_year})`)

        for (const child of node.children) {
            this.display(child, depth + 1)
        }
    }
}

export default FamilyTree

import FamilyTree from "./family-tree.js"

const myFamilyTree = new FamilyTree()

const Ahmed = myFamilyTree.addFamilyMember({
    name: "Ahmed",
    birth_year: "2001",
    parent: null
})

const Mohamed = myFamilyTree.addFamilyMember({
    name: "Mohamed",
    birth_year: "2021",
    parent: Ahmed
})

const Ali = myFamilyTree.addFamilyMember({
    name: "Ali",
    birth_year: "2041",
    parent: Mohamed
})

const Ashraf = myFamilyTree.addFamilyMember({
    name: "Ashraf",
    birth_year: "2043",
    parent: Mohamed
})

const Ebrahim = myFamilyTree.addFamilyMember({
    name: "Ebrahim",
    birth_year: "2023",
    parent: Ahmed
})

const Waleed = myFamilyTree.addFamilyMember({
    name: "Waleed",
    birth_year: "2043",
    parent: Ebrahim
})

const Salah = myFamilyTree.addFamilyMember({
    name: "Salah",
    birth_year: "2045",
    parent: Ebrahim
})

myFamilyTree.display()
console.log("Parent of Ebrahim: ", Ebrahim.getParent())
console.log("Children of Ebrahim: ", Ebrahim.getChildren())

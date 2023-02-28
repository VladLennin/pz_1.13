function countProperties(obj) {
    return Object.keys(obj).length;
}

let someObj = {
    name:"asdasd",
    surname:"asdasd",
    surname1:"asdsd",
    surname2:"asdasdasd",
    surname3:"asdasd",
}

console.log(countProperties(someObj))
function createGreetable(str) {
    const result = str;
    result.greet = function (greeting) {
        return `${greeting}, ${this}!`
    };
    return result;
}

const g = createGreetable("Vlad")
console.log(g.greet("Hello"))

function* sequence(start, step) {
    let current = start;
    while (true) {
        yield current;
        current += step;
    }
}


const generator = sequence(0,8)
console.log(generator)
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

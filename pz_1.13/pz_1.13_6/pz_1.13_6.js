function pluck(arr, fieldName) {
    return arr.map(function(obj) {
        return obj[fieldName];
    });
}

const arr = [
    { name: 'John', age: 28 },
    { name: 'Jane', age: 32 },
    { name: 'Bob', age: 45 }
];

let names = pluck(arr, 'name');
console.log(names);

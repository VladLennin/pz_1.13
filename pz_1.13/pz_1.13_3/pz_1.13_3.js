class Random{

   static nextInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static nextDouble(min, max) {
        return Math.random() * (max - min) + min
    }

    static nextElement(arr) {
        return arr[this.nextInt(0,arr.length)];
    }
}

console.log(Random.nextInt(1,100))
console.log(Random.nextDouble(1,100))
let arr = [1,12,1,2,3,2,1,34,5,5,6,1,2,4,532,63,46]
console.log(Random.nextElement(arr))
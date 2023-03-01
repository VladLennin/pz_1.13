class Worker {
    name;
    surname;
    rate;
    days;

    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary = () => {
        return this.rate * this.days;
    }

    toString = () => {
        return "Name: " + this.name + "\n" +
            "Surname: " + this.surname + "\n" +
            "Rate: " + this.rate + "\n" +
            "Days: " + this.days + "\n" +
            "Salary: " + this.getSalary() + "\n"
    }
}

const workers = [new Worker("Vladlen1", "Marchenko", 100, 189),
    new Worker("Vladlen2", "Marchenko", 100, 189),
    new Worker("Vladlen3", "Marchenko", 100, 189),
    new Worker("Vladlen4", "Marchenko", 100, 189),
    new Worker("Vladlen5", "Marchenko", 100, 189),]

workers.map(worker => {
    console.log(worker.toString())
})
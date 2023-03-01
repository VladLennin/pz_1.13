class Task {
    name;
    description;
    dateStart;
    dateEnd;

    constructor(name, description, dateStart, dateEnd) {
        this.name = name;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
}

class ExtendedTask extends Task {
    progress;
    status;


    constructor(name, description, dateStart, dateEnd, progress, status) {
        super(name, description, dateStart, dateEnd);
        this.progress = progress;
        this.status = status;
    }

    toString = () => {
        return this.name + "\n" +
            this.description + "\n" +
            this.dateStart + "\n" +
            this.dateEnd + "\n" +
            this.progress + "\n" +
            this.status + "\n"
    }

}


const date = new Date()
const tasks = [new ExtendedTask("Task1", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready"),
    new ExtendedTask("Task2", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready"),
    new ExtendedTask("Task3", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready"),
    new ExtendedTask("Task4", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready"),
    new ExtendedTask("Task5", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready"),
    new ExtendedTask("Task6", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready"),
    new ExtendedTask("Task7", "Some description", date.toDateString(), date.toDateString(), 75, "Isn`t ready")]


const cards = document.getElementById("cards")
tasks.map(task => {
    cards.innerHTML +=`<div class="card">${task.toString()}</div>`
})
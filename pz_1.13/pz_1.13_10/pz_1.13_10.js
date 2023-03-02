class PowerPlant {
    constructor(power) {
        if (power >= 1 && power <= 100)
            this.power = power;
        else
            console.log("Incorrect power")
    }

    getPower() {
        return this.power;
    }
}

class SolarPanel {
    constructor(power) {
        if (power >= 1 && power <= 5)
            this.power = power;
        else
            console.log("Incorrect power")
    }

    getPower() {
        return this.power;
    }
}

class House {
    constructor(numApartments) {
        this.numApartments = numApartments;
    }

    getDayPower() {
        return (this.numApartments * 4) / 1000;
    }

    getNightPower() {
        return (this.numApartments * 1) / 1000;
    }
}


class PowerLine {
    constructor(power, price) {
        this.power = power;
        this.price = price;
    }

    getPower() {
        return this.power;
    }

    getPrice() {
        return this.price;
    }
}

function calculatePowerAndCost(network) {
    let totalDayPower = 0;
    let totalNightPower = 0;
    let totalCost = 0;

    for (let element of network) {
        if (element instanceof PowerPlant) {
            totalDayPower += element.getPower();
            totalNightPower += element.getPower();
        } else if (element instanceof SolarPanel) {
            totalDayPower += element.getPower();
        } else if (element instanceof House) {
            totalDayPower -= element.getDayPower();
            totalNightPower -= element.getNightPower();
        } else if (element instanceof PowerLine) {
            const power = element.getPower();
            const price = element.getPrice();
            if (power > 0) {
                totalCost += price * Math.max(totalDayPower - power, 0);
            } else {
                totalCost += price * Math.max(power - totalDayPower, 0);
            }
        }
    }

    return {
        totalDayPower,
        totalNightPower,
        totalCost,
    };
}


const network = [
    new PowerPlant(20),
    new PowerPlant(40),
    new PowerPlant(50),
    new PowerPlant(10),
    new PowerPlant(80),
    new PowerPlant(33),
    new PowerPlant(12),
    new PowerPlant(34),
    new PowerPlant(53),
    new PowerPlant(71),
    new PowerPlant(43),
    new SolarPanel(2),
    new SolarPanel(3),
    new SolarPanel(4),
    new SolarPanel(5),
    new SolarPanel(3),
    new SolarPanel(3),
    new SolarPanel(4),
    new SolarPanel(5),
    new SolarPanel(2),
    new SolarPanel(2),
    new PowerLine(100, 20),
    new PowerLine(200, 12),
    new PowerLine(140, 32),
    new PowerLine(120, 12),
    new PowerLine(80, 49),
    new PowerLine(120, 12),
    new PowerLine(90, 43),
    new PowerLine(89, 12),
    new PowerLine(59, 32),
    new PowerLine(150, 89),
    new PowerLine(100, 43),
    new House(30),
    new House(40),
    new House(50),
    new House(60),
    new House(70),
    new House(80),
    new House(20),
]
console.log(calculatePowerAndCost(network))
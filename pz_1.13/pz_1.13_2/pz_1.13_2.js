const createTable = (size) => {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'I', 'G', 'H', 'K', 'L', 'M', 'Q', 'U', 'N', 'O', 'P', 'V', 'W', 'A', 'S', 'T', 'X', 'Y', 'Z']
    let table = []
    for (let i = 0; i < size; i++) {
        let row = []
        for (let j = 0; j < size; j++) {
            if (i === 0 && j === 0) {
                row.push("")
            } else if (i !== 0 && j === 0) {
                row.push(i)
            } else if (i === 0 && j !== 0) {
                row.push(letters[j-1])
            } else if ((i + j) % 2 === 0) {
                row.push("#")
            } else {
                row.push("*")
            }
        }
        table.push(row)
    }
    console.log(table)
}

createTable(25)

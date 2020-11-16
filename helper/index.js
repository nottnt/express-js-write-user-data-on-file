const createCsvWriter = require('csv-writer').createObjectCsvWriter
const fs = require('fs')
const csv = require('csv-parser')

const writeFile = async (data) => {
    const csvWriter = createCsvWriter({
        path: '../dataUser.csv',
        header: [
            { id: 'user_id', title: 'Id' },
            { id: 'name', title: 'Name' },
            { id: 'surname', title: 'Surname' },
            { id: 'birthDate', title: 'Birthdate' },
        ],
    })
    await csvWriter.writeRecords([data]).then(() => {
        console.log('The CSV file was written successfully')
    })
}

const readFile = async () => {
    const promiseStream = new Promise(function (resolve, reject) {
        fs.createReadStream('../dataUser.csv')
            .pipe(csv())
            .on('data', (row) => {
                resolve(row)
            })
            .on('end', () => {
                console.log('CSV file successfully processed')
            })
    })
    const result = await promiseStream

    return result
}

module.exports = {
    writeFile,
    readFile,
}

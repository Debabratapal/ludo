const fs = require('fs');


const writeFile = (obj)  => {
    fs.writeFileSync('./db.json', JSON.stringify(obj));
}
const readFile = () => {
    let read = fs.readFileSync('./db.json');
    // console.log(JSON.parse(read));
    return JSON.parse(read);
}

module.exports = { writeFile , readFile} ;

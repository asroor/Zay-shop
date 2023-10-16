const fs = require('fs');
const path = require('path');

const addNewPostDB = async (poster) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8'));
    data.push(poster);
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(data), 'utf8', (err) => {
        if (err) throw err;
    });
}

module.exports = { addNewPostDB };
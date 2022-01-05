var fs = require('fs'); //require file system object

fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
    // console.log(data);
    let x = JSON.parse(data);
    // console.log(typeof x);
    JSON.parse(data).forEach(element => {
            console.log(element.keys());
            console.log(element.values());
        })
    });
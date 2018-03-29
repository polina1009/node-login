var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())


const users = [
    { email: 'ololo@gmail.com', password: '123', },
    { email: 'ororo@gmail.com', password: '321', },
    { email: 'tototo@gmail.com', password: '456', },
    { email: 'popopo@gmail.com', password: '654', },
];

app.post('/login-user', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let userFound = false;
    users.forEach(user => {
        if(user.email == email && user.password == password) {
            userFound = true;
        }
    });

    if(userFound) {
        res.send('Veverno :)');
    } else {
        res.status(401).send('Neverno!');
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
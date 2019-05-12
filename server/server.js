require('./config/config');
const express = require('express');
const bodyParser  = require('body-parser');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/users', function (req, res) {
    res.json('get users');
});

app.post('/users', function (req, res) {
    let body = req.body;
    res.json({
        user:body
    });
});

app.put('/users/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/users', function (req, res) {
    res.json('delete users');
});



app.listen(process.env.PORT,()=>{

    console.log('server start port:',process.env.PORT)
});
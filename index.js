const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

app.get('/getData', (req, res) => {
    let myData = [{
        'name': 'Chandra',
        'email': 'test@gmail.com',
        'mobile': '9999999999'
    },
    {
        'name': 'Sai',
        'email': 'sai@gmail.com',
        'mobile': '9999999999'
    }]
    let result = {
        status:'sucess',
        data : myData
    }
    res.send(result);
})

app.listen(3000, () => {
    console.log('App is Running...')
})
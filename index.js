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


let sum = a => b => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)(5)())
reverseString = str => str.split('').reverse().join('')

console.log(reverseString('dad'));

const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a)
        return this;
    },
    getB() {
        console.log(this.b)
        return this;
    }
}

obj.getA().getB()

let arry = [1, 2, 3, 4, 5];

console.log(arry.reduce((acc, item) => acc + item))

   
function isPolindrome(str){
    str = str.replace(/\W/g,'').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

console.log(isPolindrome('nan'))

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/weather', {
    useNewUrlParser: true, useUnifiedTopology: true
});

const setCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(setCors);
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({
        name: 'monday',
        forecast: 'sun'
    })
});

app.listen(5000, () => {
    console.log(`server run on 5000`);
});

//KILL PORT =>  kill -9 $(lsof -t -i:3006)
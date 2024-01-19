const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors  = require('cors');

// const mongoose  = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/todosdb', {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(r =>{
//         console.log('Connected to MongoDB')
//     })


const todosRouter = require('./routes/todos_v2');

const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/todos', todosRouter);

module.exports = app;

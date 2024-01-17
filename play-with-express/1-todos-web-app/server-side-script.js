
const express = require('express');
// const logger = require('./middlewares/logger');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const todosRoute = require('./routes/todos');


const app = express();


// app.use(logger);
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/todos', todosRoute);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


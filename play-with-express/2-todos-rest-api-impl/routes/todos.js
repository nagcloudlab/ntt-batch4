const express = require('express');
const router = express.Router();

const todos = [
    {
        id: 1,
        title: 'Learn JavaScript',
        completed: true
    },
    {
        id: 2,
        title: 'Learn Angular',
        completed: false
    },
    {
        id: 3,
        title: 'Learn Node.js',
        completed: false
    },
    {
        id: 4,
        title: 'Learn React.js',
        completed: false
    },
    {
        id: 5,
        title: 'Learn MongoDB',
        completed: false
    },
    {
        id: 6,
        title: 'Learn GraphQL',
        completed: false
    },
    {
        id: 7,
        title: 'Learn Apollo',
        completed: false
    },
    {
        id: 8,
        title: 'Learn Express.js',
        completed: false
    },
    {
        id: 9,
        title: 'Learn TypeScript',
        completed: false
    },
    {
        id: 10,
        title: 'Learn HTML',
        completed: false
    },
]


router.param("id", (req, res, next) => {
    const id = parseInt(req.params.id);
    req.id = id;
    next();
})

router
    .get('/', (req, res, next) => {
        const limit = parseInt(req.query.limit);
        if (limit) {
            res.json(todos.slice(0, limit));
        } else {
            res.json(todos);
        }
    })
    .post('/', (req, res) => {
        const { title } = req.body;
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false
        }
        todos.push(newTodo);
        res.status(201).json(newTodo);
    })
    .get('/:id', (req, res) => {
        const todo = todos.find(todo => todo.id === req.id);
        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: `Todo ${todoId} not found` });
        }
    })
    .delete('/:id', (req, res) => {
        const todoId = req.id;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex > -1) {
            todos.splice(todoIndex, 1);
            res.status(204).end();
        } else {
            res.status(404).json({ message: `Todo ${todoId} not found` });
        }
    })

module.exports = router;
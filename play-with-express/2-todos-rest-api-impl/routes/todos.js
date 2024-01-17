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
    {
        id: 11,
        title: 'Learn CSS',
        completed: false
    },
    {
        id: 12,
        title: 'Learn SCSS',
        completed: false
    },
    {
        id: 13,
        title: 'Learn SASS',
        completed: false
    },
    {
        id: 14,
        title: 'Learn LESS',
        completed: false
    },
    {
        id: 15,
        title: 'Learn Stylus',
        completed: false
    },
    {
        id: 16,
        title: 'Learn Python',
        completed: false
    },
    {
        id: 17,
        title: 'Learn Java',
        completed: false
    },
    {
        id: 18,
        title: 'Learn C++',
        completed: false
    },
    {
        id: 19,
        title: 'Learn C#',
        completed: false
    },
    {
        id: 20,
        title: 'Learn PHP',
        completed: false
    },
    {
        id: 21,
        title: 'Learn Ruby',
        completed: false
    },
    {
        id: 22,
        title: 'Learn Go',
        completed: false
    },
    {
        id: 23,
        title: 'Learn Rust',
        completed: false
    },
    {
        id: 24,
        title: 'Learn Scala',
        completed: false
    },
    {
        id: 25,
        title: 'Learn Kotlin',
        completed: false
    },
    {
        id: 26,
        title: 'Learn Swift',
        completed: false
    },
    {
        id: 27,
        title: 'Learn Dart',
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
        if (limit > 0) {
            res.json(todos.slice(0, limit));
        } else {
            next();
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
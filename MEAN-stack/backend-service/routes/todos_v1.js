const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

router.param("id", (req, res, next) => {
  req.id = parseInt(req.params.id);
  next();
})

router
    .get('/', async (req, res, next) => {
      const limit = parseInt(req.query.limit);
      try {
          const todos = await Todo.find({}); // non-blocking/async IO
          res.status(200).json(todos);
      }catch (e) {
          next(e);
      }
    })
    .post('/', async (req, res) => {
      const { title } = req.body;
        const todo = new Todo({
            title,
            completed: false,
            user_id: 1
        });
        const savedTodo=await todo.save()
        res.status(201).json(savedTodo);
    })
    .get('/:id', (req, res) => {
        res.status(200).json({});
    })
    .delete('/:id', (req, res) => {
      const todoId = req.id;
        res.status(204).json({})
    })

module.exports = router;
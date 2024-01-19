const express = require('express');
const router = express.Router();
const { MongoClient,ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017/todosdb";

router.param("id", (req, res, next) => {
  req.id = req.params.id
  next();
})

router
    .get('/', async (req, res, next) => {
      const limit = parseInt(req.query.limit);
        const client = new MongoClient(uri);
        try {
            const database = client.db('todosdb');
            const todos = database.collection('todos');
            // Query for a movie that has the title 'Back to the Future'
            //const cursor = await todos.find({});
            const cursor=await todos.aggregate([
                {"$lookup": {
                    "from": "users",
                    "localField": "user_id",
                    "foreignField": "_id",
                    "as": "user"
                    }
                }
            ])
            const results = await cursor.toArray();
            res.status(200).json(results);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    })
    .post('/', async (req, res) => {
      const { title } = req.body;
        const todo = { title, completed: false };
        const client = new MongoClient(uri);
        try {
            const database = client.db('todosdb');
            const todos = database.collection('todos');
            const result = await todos.insertOne(todo);
            res.status(201).json(await todos.findOne({_id: result.insertedId}));
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    })
    .get('/:id', (req, res) => {
        res.status(200).json({});
    })
    .delete('/:id', async (req, res) => {
      const todoId = req.id;
      const client = new MongoClient(uri);
      try{
        const database = client.db('todosdb');
        const todos = database.collection('todos');
        const result = await todos.deleteOne({_id: new ObjectId(todoId)});
        res.status(204).json(null);
      }
        finally{
          await client.close();
        }
    })

module.exports = router;
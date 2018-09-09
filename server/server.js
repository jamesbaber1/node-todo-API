var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//Allows users to send json to express
app.use(bodyParser.json());


//POST /todos
app.post("/todos",(req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    })
});


//GET /todos
app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    })
})

//GET /todos/123456
app.get('/todos/:id', (req, res)=>{
    var id = req.params.id;

    //return Error  if ID isnt valid
    if(!ObjectID.isValid(id))
    {
        res.status(404).send();
    }
    else
    {
        Todo.findById(id).then((todo)=>{
            
            //returns error if ther  is no todo
            if(!todo)
            {
                res.status(404).send();
            }
            else
            {
                res.send({todo});
            }
        }).catch((e)=>{
            res.status(400).send();
        })
        //success
            //if todo - send it back 404 with empty body
        //error
            //400 - and send empty body back

    }
});


app.listen(3000, ()=> {
    console.log('Started on port 3000');
});

module.exports = {app};
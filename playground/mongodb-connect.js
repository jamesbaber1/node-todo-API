
//cd C:\Program Files\MongoDB\Server\4.0\bin
//mongod.exe --dbpath "/Users/James Baber/mongo-data"

//cd C:\Program Files\MongoDB\Server\4.0\bin
//mongo.exe


//const MonogClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  //Destructured





MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{

    if(err)
    {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.collection('Users').insertOne({
        name: 'Andrew',
        age: 25,
        location:'Philadelphia'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    })

    client.close();
});


//Destructuring Example
var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name)
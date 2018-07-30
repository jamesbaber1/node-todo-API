const {MongoClient, ObjectID} = require('mongodb');  //Destructured





MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{

    if(err)
    {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

//     db.collection('Todos').find({
//         _id: new ObjectID('5b5d0dee11c2dd256ca53f18')
// }).toArray().then((docs)=>{
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err)=>{
//         console.log('Unable to fetch todos', err);
//     })

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count: ${count}`);
// }, (err)=>{
//     console.log('Unable to fetch todos', err);
// })

db.collection('Users').find({name: "Andrew"}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
});


    //client.close();
});

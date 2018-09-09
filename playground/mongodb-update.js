const {MongoClient, ObjectID} = require('mongodb');  //Destructured





MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{

    if(err)
    {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b60f713b5d4b7f3f0e5620b')}, {$set: {completed: true}
    //     },
    //     {
    //         returnOriginal: false
    //     }).then((result)=>{
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b5d1397439b490ffc95588c')}, 
        {$set: {name: 'James'},
        $inc: {age: 1}},
        {
            returnOriginal: false
        }).then((result)=>{
            console.log(result);
        });

    //client.close();
});

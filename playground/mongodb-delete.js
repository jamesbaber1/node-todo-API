const {MongoClient, ObjectID} = require('mongodb');  //Destructured





MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client)=>{

    if(err)
    {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name: 'Andrew'});
    db.collection('Users').findOneAndDelete({_id : new ObjectID("5b5d15dfeb8f392558b64cd7")}).then((result)=>{
        console.log(JSON.stringify(results, undefined, 2));
    })


    //client.close();
});

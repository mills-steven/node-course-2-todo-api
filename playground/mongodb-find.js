//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log('Unable to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //     _id: new ObjectID ('58d836619ff547f2c31e7f88')
    //   }).toArray().then((docs) => {
    //   console.log('Todos')
    //   console.log(JSON.stringify(docs, undefined, 4))
    // }, (err) => {
    //   console.log('Unable to fetch todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`)
    //
    // }, (err) => {
    //   console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({location: 'Chicago, IL'}).toArray().then((docs)=> {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
      console.log('Unable to fetch the users', err);
    });

    //db.close();
});

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log('Unable to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    //
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert Todo.', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    // db.collection('Users').insertOne({
    //   name: 'Steve',
    //   age: 32,
    //   location: 'Chicago, IL'
    // }, (err, result) => {
    //   if (err) {
    //     return console.log(`Unable to insert user into table`, err);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 4));
    // });
    //

    db.close();
});

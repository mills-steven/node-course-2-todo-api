//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log('Unable to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

  //   //findOneAndUpdate
  //   db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID("58e01937e938f04b1d96dc7e")
  //   }, {
  //     $set: {
  //     completed: true
  //     }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });
  //
  //

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58d452437f36877da401d3c5')
  }, {
    $set: {
      name: 'Steve'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

    //db.close();

});

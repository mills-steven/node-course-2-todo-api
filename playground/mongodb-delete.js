//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      console.log('Unable to connect MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //   text: 'Go to lunch with wife'
    // }).then((result) =>{
    //   console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({
    //   text: 'Go to lunch with wife'
    // }).then((result)=> {
    //   console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //   completed: false
    // }).then((result) => {
    //   console.log(result);
    // })
    //db.close();

    // db.collection('Users').deleteMany({name: 'Steve'}).then((result) => {
    //   console.log(result);
    // });
    db.collection('Users').findOneAndDelete({_id: new ObjectID("58e01ce7e938f04b1d96de54")}).then((result) => {
      console.log(result);
    });
});

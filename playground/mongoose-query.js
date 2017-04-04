const {ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// var id = '58e15d9715f21f14a5be09b811';
//
// if(!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));
var id = '58e03a5f544c4cef033f6db4'


User.findById(id).then((user) => {
  if(!user) {
    return console.log('id not found');
  }
  console.log('User by id: ', user);
}).catch((e) => console.log(e));

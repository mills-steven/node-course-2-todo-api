const {ObjectID} = require('mongodb');

const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove({})
//
Todo.findByIdAndRemove('58e6ea9783e826e94ffe2a3d').then((todo) =>{
  console.log(todo);
});

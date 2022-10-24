import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  title: String,
  checked: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;

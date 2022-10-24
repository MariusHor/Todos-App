import mongoose from 'mongoose';
import Todo from '../models/todo.js';

// Name: createTodo
// Type: POST
// Path: '/'

export const createTodo = async (req, res) => {
  const { title } = req.body;
  try {
    const newTodo = await Todo.create({ title });
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Name: getTodos
// Type: GET
// Path: '/'

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Name: updateTodo
// Type: PATCH
// Path: '/:id'

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, checked } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json(`Could not find todo with id: ${id}`);
  }

  const updatedTodo = { title, checked, _id: id };
  await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });
  res.status(200).json(updatedTodo);
};

// Name: deleteTodo
// Type: DELETE
// Path: '/:id'

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json(`Could not find todo with id: ${id}`);
  }

  const deletedTodo = await Todo.findByIdAndRemove(id);
  res.status(200).json(`Deleted todo: ${deletedTodo.title}`);
};

// Name: deleteTodos
// Type: DELETE
// Path: '/'

export const deleteTodos = async (req, res) => {
  try {
    await Todo.deleteMany({});
    res.status(200).json('Successfully deleted all todos');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

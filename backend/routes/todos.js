import express from 'express';
const router = express.Router();

import { createTodo, getTodos, updateTodo, deleteTodo, deleteTodos } from '../controllers/todos.js';

router.route('/').post(createTodo).delete(deleteTodos).get(getTodos);
router.route('/:id').patch(updateTodo).delete(deleteTodo);

export default router;

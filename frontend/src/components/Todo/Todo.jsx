/* eslint react/prop-types: 0 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { deleteTodo, updateTodo } from '../../actions/todos';
import './Todo.scss';

const Todo = ({ todo, checked }) => {
  const dispatch = useDispatch();
  const updatedTodo = { ...todo, checked: !checked };

  return (
    <li className='todo'>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => dispatch(updateTodo(todo._id, updatedTodo))}
      />
      <label
        onDoubleClick={() => dispatch(updateTodo(todo._id, updatedTodo))}
        style={todo.checked ? { textDecoration: 'line-through' } : null}
      >
        {todo.title}
      </label>
      <FaTrashAlt onClick={() => dispatch(deleteTodo(todo._id))} />
    </li>
  );
};

export default Todo;

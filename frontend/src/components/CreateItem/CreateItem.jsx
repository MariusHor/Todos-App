/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import './CreateItem.scss';
import { createTodo } from '../../actions/todos';

const CreateItem = ({ inputRef }) => {
  const [todoData, setTodoData] = useState({
    title: '',
    checked: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(createTodo(todoData));
    setTodoData({ title: '', checked: '' });
    inputRef.current.focus();
  };

  const formatWord = e => {
    const value = e.target.value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <form className='createItem' onSubmit={handleSubmit}>
      <label htmlFor='addItem'></label>
      <input
        ref={inputRef}
        type='text'
        required
        id='addItem'
        placeholder='Create a new todo...'
        autoFocus
        autoComplete='off'
        value={todoData.title}
        onChange={e => setTodoData({ ...todoData, title: formatWord(e) })}
      />
      <button className='createItem__submit' type='submit' aria-label='add new todo'>
        <FaPlus />
      </button>
    </form>
  );
};

export default CreateItem;

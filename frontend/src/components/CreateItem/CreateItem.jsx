/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import './CreateItem.scss';

const CreateItem = () => {
  const [itemData, setItemData] = useState({
    title: '',
    checked: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
  };

  const formatWord = e => {
    const value = e.target.value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <form className='createItem' onSubmit={handleSubmit}>
      <label htmlFor='addItem'></label>
      <input
        type='text'
        required
        id='addItem'
        placeholder='Create a new todo...'
        autoFocus
        autoComplete='off'
        value={itemData.title}
        onChange={e => setItemData({ ...itemData, title: formatWord(e) })}
      />
      <button className='createItem__submit' type='submit' aria-label='add new todo'>
        <FaPlus />
      </button>
    </form>
  );
};

export default CreateItem;

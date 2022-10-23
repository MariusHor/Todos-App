import React from 'react';
import { FaPlus } from 'react-icons/fa';

import './CreateItem.scss';

const CreateItem = () => {
  return (
    <form className='createItem'>
      <label htmlFor='addItem'></label>
      <input type='text' required id='addItem' placeholder='Create a new todo...' autoFocus />
      <button className='createItem__submit' type='submit' aria-label='add new todo'>
        <FaPlus />
      </button>
    </form>
  );
};

export default CreateItem;

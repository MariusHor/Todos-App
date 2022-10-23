import React from 'react';

import './Categories.scss';

const Categories = () => {
  return (
    <div className='categories'>
      <button className='categories__btn'>All</button>
      <button className='categories__btn'>Active</button>
      <button className='categories__btn'>Completed</button>
    </div>
  );
};

export default Categories;

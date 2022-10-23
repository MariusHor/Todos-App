import React from 'react';
/* eslint react/prop-types: 0 */

import './Content.scss';

const Content = () => {
  const items = [
    {
      title: 'Another todo',
      id: 1,
    },
    {
      title: 'Old todo',
      id: 2,
    },
  ];

  return (
    <div className='content'>
      {!items ? (
        <p>Please add a new Todo!</p>
      ) : (
        <ul className='content__list'>
          {items.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      <div className='content__bottom'>
        <p>0 items left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Content;

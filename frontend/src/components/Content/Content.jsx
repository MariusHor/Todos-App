/* eslint react/prop-types: 0 */
import React from 'react';

import './Content.scss';
import Todo from '../Todo/Todo';

const Content = ({ todos }) => {
  return (
    <div className='content'>
      {!todos ? (
        <p>Please add a new Todo!</p>
      ) : (
        <ul className='content__list'>
          {todos.map(todo => (
            <Todo key={todo._id} todo={todo} checked={todo.checked} />
          ))}
        </ul>
      )}
      <div className='content__bottom'>
        <p>{`${todos.length}`} items</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Content;

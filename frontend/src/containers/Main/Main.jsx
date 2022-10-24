import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import './Main.scss';
import { CreateItem, Categories, Content } from '../../components';

const Main = () => {
  const inputRef = useRef();
  const todos = useSelector(state => state.todos);
  return (
    <div className='main'>
      <CreateItem inputRef={inputRef} />
      <Content todos={todos} />
      <Categories />
    </div>
  );
};

export default Main;

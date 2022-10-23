import React from 'react';

import './Main.scss';
import { CreateItem, Categories, Content } from '../../components';

const Main = () => {
  return (
    <div className='main'>
      <CreateItem />
      <Content />
      <Categories />
    </div>
  );
};

export default Main;

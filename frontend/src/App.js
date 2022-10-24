import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';

import { Header, Main } from './containers';
import { getTodos } from './actions/todos';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className='app'>
      <div className='app__container'>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;

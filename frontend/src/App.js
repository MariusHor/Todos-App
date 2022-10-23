import './App.scss';

import { Header, Main } from './containers';

const App = () => {
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

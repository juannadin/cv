import React from 'react';
import './styles/index.scss';

import data from './data';
import Header from './components/Header';
import Body from './components/Body';

const { header, body } = data;

const App = () => {
  return (
    <div className="cv">
      <Header {...header} />
      <Body {...body} />
    </div>
  );
}

export default App;

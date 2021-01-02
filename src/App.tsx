import React from 'react';
import './styles/index.scss';

import data from './data';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const { header, body, footer } = data;

const App = () => {
  return (
    <div className="cv">
      <Header {...header} />
      <Body {...body} />
      <Footer {...footer} />
    </div>
  );
}

export default App;

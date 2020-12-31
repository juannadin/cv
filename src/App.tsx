import React from 'react';
import './styles/index.scss';

import data from './data';
import Layout from './components/Layout';
import Header from './components/Header';

const App = () => {
  return (
    <Layout>
      <Header {...data.header} />
    </Layout>
  );
}

export default App;

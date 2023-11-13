import * as React from 'react';
import { Layout } from './layouts/Layout/index';
import './index.css';
import { Main } from './pages/Main';

function App() {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;

import React from 'react';
import './App.css';
import pp from './assets/pp.png'
import { Presentation } from './components/Presentation';
import { Page } from './components/Page';

function App() {
  return (
    <React.Fragment>
      <Presentation name='Guillaume FAURE' pp={pp}/>
      <Page name='Projects'></Page>
      <Page name='Technos'></Page>
      <Page name='AboutMe'></Page>
    </React.Fragment>
  )
}

export default App;

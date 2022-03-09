import React from 'react';
import './App.css';
import pp from './assets/pp.png'
import { Presentation } from './components/Presentation';

function App() {
  return (
    <Presentation name='Guillaume FAURE' pp={pp}/>
  )
}

export default App;

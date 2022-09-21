import React from 'react';
import './App.css';
import { Application } from './components/Application/Application';
import { Skills } from './components/Skills/Skills';
// import Greet from './components/Greet/Greet';

function App() {
  return (
    <div className='App'>
      <Application />
      <Skills skills={['HTML', 'CSS']} />
    </div>
  );
}

export default App;

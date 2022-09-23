import React from 'react';
import './App.css';
import { Application } from './components/Application/Application';
import Counter from './components/Counter/Counter';
import MuiMode from './components/mui/Mui-mode';
import { Skills } from './components/Skills/Skills';
import Users from './components/users/Users';
import AppProvider from './providers/appProvider';

// import Greet from './components/Greet/Greet';

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <Application />
        <Skills skills={['HTML', 'CSS', 'JS', 'NodeJS']} />
        <Counter />
        <MuiMode />
      </div>
      <Users />
    </AppProvider>
  );
}

export default App;

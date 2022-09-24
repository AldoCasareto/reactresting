import React from 'react';
import './App.css';
import ChallengeOne from './components/challenges/challenge1/ChallengeOne';
import { Application } from './components/Application/Application';
import Counter from './components/Counter/Counter';
import MuiMode from './components/mui/Mui-mode';
import { Skills } from './components/Skills/Skills';
import Users from './components/users/Users';
import AppProvider from './providers/appProvider';
import Challenge2 from './components/challenges/challenge1/Challenge2';
import Challenge3 from './components/challenges/Challenge3';

// import Greet from './components/Greet/Greet';

function App() {
  return (
    // <AppProvider>
    //   <div className='App'>
    //     <Application />
    //     <Skills skills={['HTML', 'CSS', 'JS', 'NodeJS']} />
    //     <Counter />
    //     <MuiMode />
    //   </div>
    //   <Users />
    // </AppProvider>
    // <ChallengeOne />
    // <Challenge2 />
    <Challenge3 />
  );
}

export default App;

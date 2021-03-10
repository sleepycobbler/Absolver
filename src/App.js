import React from 'react';
import './Plain.css';
import './App.css';
import './Absolver.css';
import './stance.css';
import Absolver from './features/absolver/Absolver';

/**
 * The base application function
 * @name AbsolverApp
 * @returns The absolver app component
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const App = () => {
  return (
    <Absolver />
  );
}

export default App;

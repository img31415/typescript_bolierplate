import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from "./Text"

const App: React.FC = () => {
  return <div>
    <TextField text={"haha"} person={{firstName : "melissa", lastName:"goo"}}/>
  </div>;
}

export default App;

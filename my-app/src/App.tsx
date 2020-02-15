import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Text} from "./Text"

const App: React.FC = () => {
  return <div>
    <Text text={"haha"} person={{firstName : "melissa", lastName:"goo"}}/>
  </div>;
}

export default App;

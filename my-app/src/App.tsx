import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from "./Text"
import {Counter} from "./Counter";

const App: React.FC = () => {
    return <div>
        {/* <TextField text={"haha"} person={{firstName : "melissa", lastName:"goo"}}/>*/}
        <Counter>
            {(count, setCount) => (<div>{count}
                <button onClick={() => setCount(count + 1)}></button>
            </div>)}
        </Counter>
    </div>;
}

export default App;

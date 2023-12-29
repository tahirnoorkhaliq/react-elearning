import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [counter,setCounter]=useState(0);
  function handleIncrement(e){
    e.preventDefault();
    setCounter(counter + 1);
  }
  function handleDecrement(e){
    e.preventDefault();
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1 >
        Counter Demo
      </h1>
      <h1 >
        Counter: {counter}
      </h1>
      <button onClick={handleDecrement}>Decrement Counter</button>
        <button onClick={handleIncrement}>Increment Counter</button>
    </div>
  );
}

export default App;

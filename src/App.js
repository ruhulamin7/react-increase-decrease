import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0)
  const increaseHandler = () => {
    setCount(count + 1)
  }
  const deccreasetHandler = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={deccreasetHandler}>Decrease</button>
    </div>
  )
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';



const btnStyle = {
  padding: '10px 20px',
  backgroundColor: 'tomato',
  color: '#fff',
  outline: '0',
  border: 'none',
  margin: '10px'
}

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
      <button style={btnStyle} onClick={increaseHandler}>Increase</button>
      <button style={btnStyle} onClick={deccreasetHandler}>Decrease</button>
    </div>
  )
}

export default App;

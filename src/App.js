import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const players = ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mahmudullah Riyad', 'Mashrafee Mortaza', 'Mustafizur Rahman'];
  return (
    <div className="App">
      <header className="App-header">
    <ul>
      {
        players.map(player => <li>{player}</li>)
      }
    </ul>
        <Counter> </Counter>
        <Users></Users>
        <Person name="Shakib Al Hasan" country="Bangladeshi"> </Person>
        <Person name="Hashim Amla" country="South African"> </Person>
        <Person name="Sachin Tendulkar" country="Indian"> </Person>
      </header>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3> Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Person(props){

  const personStyle = {
    color: 'lightsalmon',
    backgroundColor: '#ebebeb',
    border: '2px solid blue',
    borderRadius: '10px',
    margin: '5px',
    padding: '5px',
    width: '300px',
    height: '225px'
  };

  return (
    <div style={personStyle}>
        <h3>Players name: {props.name}</h3>
        <p>{props.country} player</p>
        <button>Buy Now</button>
    </div>
  )
}

export default App;
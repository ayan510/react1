import react from 'react';
import './App.css';
// import Calc2 from './comp/Calc2';
import TodolistOffline from './comp/TodolistOffline';

function App() {
  const age = 6
  if (age >= 18) {
    console.log('voting');

  } else {
    console.log('non voting');

  }
  let x = 22
  const y = 22
  const z = x + y

  const a = 66
  const b = 22
  const c = a - b

  x = 3


  return (
    <div>

      <TodolistOffline />


    </div>
  );
}

export default App;

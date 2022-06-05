import './App.css';
import Capsule from './components/capsule';
import React from 'react';
import { GameContext } from './providers/game'

function App() {
  const { restart, result } = React.useContext(GameContext)
  return (
    <div className='container'>
      {result.state === 'none' ? <h1 className='winner'>Tic-Tac-Toe</h1> :
        <h1 className='winner'>
          {result.state}
        </h1>}
        <div className='table'>
      <div className='row'>
        <Capsule i='0' /><Capsule i='1' /><Capsule i='2' />
      </div>
      <div className='row'>
        <Capsule i='3' /><Capsule i='4' /><Capsule i='5' />
      </div>
      <div className='row'>
        <Capsule i='6' /><Capsule i='7' /><Capsule i='8' />
      </div>
      </div>
      <button onClick={restart} className='button'>Restart</button>
    </div>
  );
}

export default App;

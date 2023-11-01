import { useState } from 'react';
import UserCounter from './Components/UserCounter';
import './App.css';

function App() {
  const [userAmount, setUserAmount] = useState(6);

  const handleUserAmountChange = (event) => {
    setUserAmount(parseInt(event.target.value, 10));
  };

  const colors = ["#ff0040", "#0040ff", "#00b300", "#ffffd8", "#7209b7", "#676767"];

  return (
    <div className="App">

      <header className="App-header">
        <div className='banner'>
          <h1>Game Life Counter</h1>
          <h2>Count Your Way to Victory with Magic, Yu-Gi-Oh!, Pokémon, or any other TCG game</h2>
        </div>
      </header>
      <div className='counters'>
        {userAmount > 0 && (
          <div className='container'>
            {Array.from({ length: userAmount }).map((_, index) => (
              <UserCounter key={index} startingLife={20} color={colors[index]}/>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;

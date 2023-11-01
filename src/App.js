import { useState } from 'react';
import './App.css';

function App() {
  const [userAmount, setUserAmount] = useState(2);

  const handleUserAmountChange = (event) => {
    setUserAmount(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='banner'>
          <h1>Game Life Counter</h1>
          <h2>Count Your Way to Victory with Magic, Yu-Gi-Oh!, Pokémon, or any other TCG game</h2>
        </div>
      </header>
    </div>
  );
}

export default App;

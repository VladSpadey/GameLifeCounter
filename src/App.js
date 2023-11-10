import { useState } from 'react';
import UserCounter from './Components/UserCounter';
import './App.css';

function App() {
  const [userAmount, setUserAmount] = useState(5);
  
  const clickIncrement = 1;

  const [selectedPlayers, setSelectedPlayers] = useState('2');
  const [selectedLife, setSelectedLife] = useState('20');

  const handlePlayersChange = (event) => {
    setSelectedPlayers(event.target.value);
  };

  const handleLifeChange = (event) => {
    setSelectedLife(event.target.value);
  };


  const colors = ["#ff0040", "#0040ff", "#00b300", "#ffffd8", "#7209b7", "#676767"];

  return (
    <div className="App">
      <header className="App-header">
        <div className='banner'>
          <h1>Game Life Counter</h1>
          <h2>Count Your Way to Victory with Magic, Yu-Gi-Oh!, Pokémon, or any other TCG game</h2>
        </div>
        <div className='settings'>
          <form>
            <p>Players: </p>
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div key={number}>
                <input
                  type="radio"
                  name="players"
                  id={`players-${number}`}
                  value={number}
                  className='hidden players'
                  checked={selectedPlayers === `${number}`}
                  onChange={handlePlayersChange}
                />
                <label htmlFor={`players-${number}`} className='players-label'><h2>{number}</h2></label>
              </div>
            ))}
            <p>Life: </p>
            {[20, 30, 40].map((value, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="life"
                  id={`life-${index + 1}`}
                  value={value}
                  className='hidden defaultLife'
                  checked={selectedLife === `${value}`}
                  onChange={handleLifeChange} 
                />
                <label htmlFor={`life-${index + 1}`} className='defaultLife-label'><h2>{value}</h2></label>
              </div>
            ))}
            <p>Custom Life:</p> <input />
            <input type="button" value="set up"></input>
          </form>
        </div>
      </header>
      <div className='counters'>
        {selectedPlayers > 0 && (
          <div className='container'>
            {Array.from({ length: selectedPlayers }).map((_, index) => (
              <UserCounter key={index} startingLife={selectedLife} clickIncrement={clickIncrement} color={colors[index]}/>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;

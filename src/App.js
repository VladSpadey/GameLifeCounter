import { useState, useEffect } from 'react';
import UserCounter from './Components/UserCounter';
import './App.css';

function App() {

  const clickIncrement = 1;
  const [selectedPlayers, setSelectedPlayers] = useState('2');
  const [selectedLife, setSelectedLife] = useState('20');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const colors = ["#ff0040", "#0040ff", "#00b300", "#ffffd8", "#7209b7", "#676767"];


  const handlePlayersChange = (event) => {
    setSelectedPlayers(event.target.value);
  };

  const handleLifeChange = (event) => {
    setSelectedLife(event.target.value);
  };

  const handleCustomLife = (event) => {
    setSelectedLife(event.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("selectedPlayers:", selectedPlayers);
    console.log("selectedLife:", selectedLife);
    console.log("clickIncrement:", clickIncrement);
    setFormSubmitted(true);
  };

  const generateUniqueKey = (index) => `userCounter-${index}-${selectedLife}-${clickIncrement}-${Date.now()}`;

  const defaultUserCounters = Array.from({ length: 2 }).map((_, index) => (
    <UserCounter key={generateUniqueKey(index)} startingLife={20} clickIncrement={clickIncrement} color={colors[index]} />
  ));

  const [userCounters, setUserCounters] = useState(defaultUserCounters);

  useEffect(() => {
    if (formSubmitted) {
      setUserCounters([]);
      setUserCounters(Array.from({ length: selectedPlayers }).map((_, index) => (
        <UserCounter key={generateUniqueKey(index)} startingLife={selectedLife} clickIncrement={clickIncrement} color={colors[index]} />
      )));
      setFormSubmitted(false);
    }
  }, [formSubmitted, selectedPlayers, selectedLife, clickIncrement]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='banner'>
          <h1>Game Life Counter</h1>
          <h2>Count Your Way to Victory with Magic, Yu-Gi-Oh!, Pokémon, and other TCG games</h2>
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
            <p>Custom Life:</p> <input type='number'/>
            <p>Click Increment:</p> <input type='number'/>
            <input type="button" value="Set Up" onClick={handleFormSubmit}/>
          </form>
        </div>
      </header>
      <div className='counters'>
        {selectedPlayers > 0 && (
          <div className='container'>
            {userCounters}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;

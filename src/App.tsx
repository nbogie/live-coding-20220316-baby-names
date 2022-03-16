import React from 'react';
import './App.css';
import allBabyNames from './data/babyNames.json';

function App() {
  const namesToShow: string[] = allBabyNames.map(oneInfo => oneInfo.name);
  namesToShow.sort();

  return (
    <div className="App">
      Baby Names (live coded)

      {namesToShow.map(name => <div>{name}</div>)}
    </div>
  );
}

export default App;

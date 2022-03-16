import React from 'react';
import './App.css';
import allBabyNames from './data/babyNames.json';

function App() {
  // namesToShow.sort();

  return (
    <div className="App">
      Baby Names (live coded)

      {allBabyNames.map(nameInfo => (
        <div
          className={"babyName " + nameInfo.sex}
          key={nameInfo.id}
        >{nameInfo.sex} - {nameInfo.name}</div>
      )
      )}
    </div>
  );
}

export default App;

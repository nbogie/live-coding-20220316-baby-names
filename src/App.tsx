import React from 'react';
import './App.css';
import allBabyNames from './data/babyNames.json';

function App() {
  // namesToShow.sort();

  return (
    <div className="App">
      Baby Names (live coded)

      <div className="babyNamesList">
        {allBabyNames.map(nameInfo => (
          <div
            className={"babyName " + nameInfo.sex}
            key={nameInfo.id}
          >{nameInfo.name}</div>
        )
        )}
      </div>
    </div>
  );
}

export default App;

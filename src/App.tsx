import React from 'react';
import './App.css';
import { BabyNameInfo } from './types';
import { compareTwoBabyNameInfos } from './BabyNameUtils';
import allBabyNames from './data/babyNames.json';

function App() {
  const sortedBabyNames: BabyNameInfo[] = [...allBabyNames];


  sortedBabyNames.sort(compareTwoBabyNameInfos);
  return (

    <div className="App">
      Baby Names (live coded)

      <div className="babyNamesList">
        {sortedBabyNames.map(nameInfo => (
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

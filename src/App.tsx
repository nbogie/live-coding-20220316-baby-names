import React from 'react';
import './App.css';
import allBabyNames from './data/babyNames.json';

interface BabyNameInfo {
  name: string;
  id: number;
  sex: string;
}

function compareTwoBabyNameInfos(infoA: BabyNameInfo, infoB: BabyNameInfo) {
  if (infoA.name < infoB.name) {
    return -1;
  } else if (infoA.name > infoB.name) {
    return 1;
  } else {
    return 0;
  }
}

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

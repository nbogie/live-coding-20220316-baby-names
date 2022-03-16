import React, { useState } from 'react';
import './App.css';
import { BabyNameInfo } from './types';
import { compareTwoBabyNameInfos } from './BabyNameUtils';
import allBabyNames from './data/babyNames.json';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedBabyNames: BabyNameInfo[] = [...allBabyNames];
  sortedBabyNames.sort(compareTwoBabyNameInfos);

  const filteredBabyNames: BabyNameInfo[] = sortedBabyNames.filter(
    (oneBabyNameInfo: BabyNameInfo) => oneBabyNameInfo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSearchChange(event: any) {
    setSearchTerm(event.target.value);
  }

  return (

    <div className="App">
      Baby Names (live coded)
      <input
        onChange={handleSearchChange}
        value={searchTerm}
        placeholder="search..."
      />

      You are currently filtering for names matching...
      {searchTerm}
      <hr />

      <div className="babyNamesList">
        {filteredBabyNames.map(nameInfo => (
          <div
            className={"babyName " + nameInfo.sex}
            key={nameInfo.id}
          >{nameInfo.name}
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default App;

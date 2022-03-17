import React, { useState } from 'react';
import './App.css';
import { BabyNameInfo } from './types';
import { compareTwoBabyNameInfos } from './BabyNameUtils';
import allBabyNames from './data/babyNames.json';
import { MainBabyNamesList } from './MainBabyNamesList';

function App() {
  const sortedBabyNames: BabyNameInfo[] = [...allBabyNames];
  sortedBabyNames.sort(compareTwoBabyNameInfos);
  const [searchTerm, setSearchTerm] = useState("");
  const namesToShow: BabyNameInfo[] = sortedBabyNames.filter(doesSearchTermOccurInName);

  function handleSearchTermChanged(event: any) {
    setSearchTerm(event.target.value);
  }

  function doesSearchTermOccurInName(nameInfo: BabyNameInfo): boolean {
    return nameInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  return (

    <div className="App">
      Baby Names (live coded)

      <input
        placeholder="Type your search"
        value={searchTerm}
        onChange={handleSearchTermChanged}
      />
      You are searching for {searchTerm}

      <hr />

      Now showing {namesToShow.length} names out of {sortedBabyNames.length} possible names.

      <MainBabyNamesList nameInfos={namesToShow} />
    </div>
  );
}
export default App;

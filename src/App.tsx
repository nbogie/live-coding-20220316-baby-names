import React, { useState } from 'react';
import './App.css';
import { BabyNameInfo } from './types';
import MainList from './MainList';
import { compareTwoBabyNameInfos } from './BabyNameUtils';
import allBabyNames from './data/babyNames.json';

function App() {
  const sortedBabyNames: BabyNameInfo[] = [...allBabyNames];
  sortedBabyNames.sort(compareTwoBabyNameInfos);
  const [searchTerm, setSearchTerm] = useState("");

  const [favouriteNames, setFavouriteNames] = useState<BabyNameInfo[]>([]);
  console.log("App() is running again.", { favouriteNames })
  const mainListOfNamesToShow: BabyNameInfo[] = sortedBabyNames
    .filter(doesSearchTermOccurInName)
    .filter(doesNotExistInFavourites);

  function handleSearchTermChanged(event: any) {
    setSearchTerm(event.target.value);
  }

  function doesSearchTermOccurInName(nameInfo: BabyNameInfo): boolean {
    return nameInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
  function doesNotExistInFavourites(soughtNameInfo: BabyNameInfo) {
    //return truth of soughtNameInfo does not exist in favouriteNames
    const found = favouriteNames.find(element => element.id === soughtNameInfo.id);
    return found === undefined;

  }

  function isInFavouriteNamesList(target: BabyNameInfo) {
    return favouriteNames.find(el => el.id === target.id) !== undefined;
  }

  function handleNameClickInMainList(nameInfo: BabyNameInfo) {
    if (isInFavouriteNamesList(nameInfo)) {
      //do nothing
      console.log("Name is already in list", nameInfo.name)
    } else {
      const newFavouriteNames = [...favouriteNames, nameInfo];
      setFavouriteNames(newFavouriteNames);
    }
  }

  function handleClickOfNameInFavourites(nameInfoToRemove: BabyNameInfo) {
    const newList = favouriteNames.filter(el => el.id !== nameInfoToRemove.id);
    setFavouriteNames(newList);
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

      <h2>Favourite Names</h2>
      ({favouriteNames.length}) so far: {favouriteNames.map(el => el.name).join(", ")}

      <div className="babyNamesList">
        {favouriteNames.map(nameInfo => (
          <div
            className={"babyName " + nameInfo.sex}
            key={nameInfo.id}
            onClick={() => handleClickOfNameInFavourites(nameInfo)}
          >{nameInfo.name}</div>
        ))}
      </div>
      <hr />
      <MainList
        list={mainListOfNamesToShow}
        fullNameCount={mainListOfNamesToShow.length}
        handleNameClick={handleNameClickInMainList}
      />
    </div>
  );
}

export default App;

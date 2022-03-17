import React from 'react';
import { BabyNameInfo } from "./types";
import { compareTwoBabyNameInfos } from "./BabyNameUtils";

const babyUrsula: BabyNameInfo = { name: "Ursula", id: 20, sex: 'm' };
const babyAldous: BabyNameInfo = { name: "Aldous", id: 31, sex: 'm' };

describe("compareTwoBabyNameInfos", () => {
  test('compares on names, alphabetically', () => {
    expect(compareTwoBabyNameInfos(babyUrsula, babyAldous)).toBeGreaterThan(0);
  });

  test('identical name with different id and sex yields 0: "do not reorder"', () => {
    const babyAldousGirl = { name: "Aldous", id: 41, sex: 'f' };
    expect(
      compareTwoBabyNameInfos(babyAldous, babyAldousGirl)
    ).toBe(0);
  });

  test('same name with different case yields 0 - i.e. do not reorder', () => {
    const babyAldousLowerCase = { name: "aldous", id: 17, sex: 'm' };
    expect(compareTwoBabyNameInfos(babyAldous, babyAldousLowerCase)).toBe(0);
  });

  test('longer name comes after shorter', () => {
    expect(compareTwoBabyNameInfos(
      { name: "Mikah", id: 20, sex: 'm' },
      { name: "Mika", id: 30, sex: 'm' },
    )).toBeGreaterThan(0);
  });


})
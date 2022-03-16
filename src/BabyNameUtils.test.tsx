import React from 'react';
import { BabyNameInfo } from "./types";
import { compareTwoBabyNameInfos } from "./BabyNameUtils";


const info1 = { name: "Philip", id: 20, sex: 'm' };
const info2 = { name: "Aldous", id: 31, sex: 'm' };

test('compares on names, alphabetically', () => {
  expect(compareTwoBabyNameInfos(info1, info2)).toBeGreaterThan(0);
});

test('longer name comes after shorter', () => {
  expect(compareTwoBabyNameInfos(
    { name: "Mikah", id: 20, sex: 'm' },
    { name: "Mika", id: 30, sex: 'm' },
  )).toBeGreaterThan(0);
});

test('identical name with different id and sex yields 0: "do not reorder"', () => {
  const info3SameName = { name: "Aldous", id: 41, sex: 'f' };
  expect(
    compareTwoBabyNameInfos(info2, info3SameName)
  ).toBe(0);
});


test('same name with different case yields 0 - i.e. do not reorder', () => {
  const info4LowerCase = { name: "aldous", id: 17, sex: 'm' };
  expect(compareTwoBabyNameInfos(info2, info4LowerCase)).toBe(0);
});


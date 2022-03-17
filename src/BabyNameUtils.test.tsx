import { compareTwoBabyNameInfos } from "./BabyNameUtils";
import { BabyNameInfo } from "./types";

test("should sort zahra and eralia in alphabetical order", () => {
    const eraliaInfo: BabyNameInfo = {
        name: "Eralia",
        id: 21034,
        sex: "f"
    };
    const zahraInfo: BabyNameInfo = {
        name: "Zahra",
        id: 21231245,
        sex: "f"
    };
    // we want to return greater than 0 if b should be sorted before a, otherwise less than 1.  (or zero when they should not be reordered.)
    expect(compareTwoBabyNameInfos(eraliaInfo, zahraInfo)).toBe(-1);
});

test('Mika comes before Mikah', () => {
    expect(compareTwoBabyNameInfos(
        { name: "Mikah", id: 20, sex: 'm' },
        { name: "Mika", id: 30, sex: 'm' },
    )).toBeGreaterThan(0);
});


test('same name with different case yields 0 - i.e. do not reorder', () => {
    const babyAldousLowerCase = { name: "aldous", id: 17, sex: 'm' };
    const babyAldous: BabyNameInfo = { name: "Aldous", id: 31, sex: 'm' };
    expect(compareTwoBabyNameInfos(babyAldous, babyAldousLowerCase)).toBe(0);
});
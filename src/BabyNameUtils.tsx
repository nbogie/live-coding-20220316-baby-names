import { BabyNameInfo } from "./types";

export function compareTwoBabyNameInfos(infoA: BabyNameInfo, infoB: BabyNameInfo) {
  if (infoA.name < infoB.name) {
    return -1;
  } else if (infoA.name > infoB.name) {
    return 1;
  } else {
    return 0;
  }
}

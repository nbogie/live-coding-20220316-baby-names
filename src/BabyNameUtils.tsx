import { BabyNameInfo } from "./types";

export function compareTwoBabyNameInfos(infoA: BabyNameInfo, infoB: BabyNameInfo) {
  if (infoA.name.toLowerCase() < infoB.name.toLowerCase()) {
    return -1;
  } else if (infoA.name.toLowerCase() > infoB.name.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

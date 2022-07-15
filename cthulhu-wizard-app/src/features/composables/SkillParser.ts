import { Investigator } from "./../wizard/types/Investigator";
import { Occupation } from "./../wizard/types/Occupation";
export function parse(text: string): Array<string> {}

// 1[SztukaRzemiosło.Dziennikarstwo, SztukaRzemiosło.Fotografia];
// ->
//@"${$t("one of")}: ${$t("Sztuka/Rzemiosło (Dziennikarstwo)")}, ${$t("Sztuka/Rzemiosło (Fotografia)")}"
// ->
// jeden z: Sztuka/Rzemiosło (Dziennikarstwo), Sztuka/Rzemiosło (Fotografia)
//

[
  {
    howMany: 1,
    from: ["Any"],
  },
  {
    howMany: 1,
    from: ["Any"],
  },
  {
    howMany: 1,
    from: ["Any"],
  },
  {
    howMany: 1,
    from: ["Any"],
  },
];

import type { Investigator } from "./../features/wizard/types/Investigator";
import { defineStore } from "pinia";
import investigatorService from "@/api/investigatorService";
import { Gender } from "@/features/wizard/types/Gender";
import { Build } from "@/features/wizard/types/Build";
import { DamageBonus } from "@/features/wizard/types/DamageBonus";

export const investigatorStore = defineStore({
  id: "investigator",
  state: () => ({
    investigator: {
      Id: "",
      FirstName: "",
      LastName: "",
      Age: 15,
      Gender: Gender.Male,
      BirthPlace: "",
      LivingPlace: "",
      Characteristic: {
        Strength: 0,
        Constitution: 0,
        Size: 0,
        Dexterity: 0,
        Appearance: 0,
        Intelligence: 0,
        Power: 0,
        Education: 0,
        Luck: 0,
        DamageBonus: DamageBonus.MinusTwo,
        Build: Build.MinusTwo,
        HitPoints: 0,
        MovementRate: 7,
      },
    } as Investigator,
    savedInvestigator: {} as Investigator,
  }),
  actions: {
    async saveInvestigator(investigator: Investigator) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.savedInvestigator = await investigatorService.create(investigator);
    },
  },
});

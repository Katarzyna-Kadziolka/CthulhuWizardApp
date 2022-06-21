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
        Strength: 15,
        Constitution: 15,
        Size: 15,
        Dexterity: 15,
        Appearance: 15,
        Intelligence: 15,
        Power: 15,
        Education: 15,
        Luck: 15,
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

import type { Occupation } from "./../features/wizard/types/Occupation";
import type { Investigator } from "./../features/wizard/types/Investigator";
import { defineStore } from "pinia";
import investigatorService from "@/api/investigatorService";
import { Gender } from "@/features/wizard/types/Gender";
import { Build } from "@/features/wizard/types/Build";
import { DamageBonus } from "@/features/wizard/types/DamageBonus";
import occupationService from "@/api/occupationService";

export const investigatorStore = defineStore({
  id: "investigator",
  state: () => ({
    investigator: {
      id: "",
      firstName: "Tom",
      lastName: "",
      age: 15,
      gender: Gender.Male,
      birthPlace: "",
      livingPlace: "",
      characteristic: {
        strength: 1,
        constitution: 1,
        size: 1,
        dexterity: 1,
        appearance: 1,
        intelligence: 1,
        power: 1,
        education: 1,
        luck: 1,
        damageBonus: DamageBonus.MinusTwo,
        build: Build.MinusTwo,
        hitPoints: 0,
        movementRate: 7,
        magicPoints: 0,
        sanity: 0,
      },
      occupation: undefined,
    } as Investigator,
    savedInvestigator: {} as Investigator,
    occupations: [] as Array<Occupation>,
  }),
  actions: {
    async saveInvestigator(investigator: Investigator) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.savedInvestigator = await investigatorService.create(investigator);
    },
    async loadOccupations() {
      this.occupations = await occupationService.getOccupations();
    },
    async getCurrentOccupationDetails() {
      if (this.investigator.occupation === undefined) {
        throw Error("Occupation of Investigator is undefined");
      }
      return await occupationService.getOccupationDetails(
        this.investigator.occupation.id
      );
    },
  },
});

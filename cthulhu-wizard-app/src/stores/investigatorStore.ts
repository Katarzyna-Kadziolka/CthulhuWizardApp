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
      firstName: "",
      lastName: "",
      age: 15,
      gender: Gender.Male,
      birthPlace: "",
      livingPlace: "",
      characteristic: {
        strength: 0,
        constitution: 0,
        size: 0,
        dexterity: 0,
        appearance: 0,
        intelligence: 0,
        power: 0,
        education: 0,
        luck: 0,
        damageBonus: DamageBonus.MinusTwo,
        build: Build.MinusTwo,
        hitPoints: 0,
        movementRate: 7,
        magicPoints: 0,
        sanity: 0,
      },
      occupation: {
        id: "",
        name: "",
      },
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
    async getOccupationDetails(id: string) {
      return await occupationService.getOccupationDetails(id);
    },
  },
});

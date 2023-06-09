import type { InvestigatorSkill } from "./../features/wizard/types/InvestigatorSkill";
import type { Occupation } from "./../features/wizard/types/Occupation";
import type { Investigator } from "./../features/wizard/types/Investigator";
import { defineStore } from "pinia";
import { Gender } from "@/features/wizard/types/Gender";
import { Build } from "@/features/wizard/types/Build";
import { DamageBonus } from "@/features/wizard/types/DamageBonus";
import occupationService from "@/api/occupationService";
import { cloneDeep } from "lodash";

export const useInvestigatorStore = defineStore({
  id: "investigator",
  state: () => ({
    investigator: {
      id: "",
      firstName: "",
      lastName: "",
      age: 15,
      gender: Gender.Male,
      birthPlace: "",
      residence: "",
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
        movementRate: 0,
        magicPoints: 0,
        sanity: 0,
      },
      occupation: {},
      skills: [] as Array<InvestigatorSkill>,
    } as Investigator,
    savedInvestigator: {} as Investigator,
    occupations: [] as Array<Occupation>,
    investigatorStates: [] as Array<Investigator>,
  }),
  actions: {
    saveInvestigator() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.savedInvestigator = cloneDeep(this.investigator);
      this.investigatorStates.push(this.savedInvestigator);
      //this.savedInvestigator = await investigatorService.create(investigator);
    },
    restoreInvestigator() {
      if (this.investigatorStates.length > 0) {
        const prevStates = this.investigatorStates.pop() as Investigator;
        this.investigator = cloneDeep(prevStates);
      }
      if (this.investigatorStates.length > 0) {
        this.savedInvestigator = cloneDeep(
          this.investigatorStates[this.investigatorStates.length - 1]
        );
      }
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

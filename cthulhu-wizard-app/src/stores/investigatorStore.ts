import type { Investigator } from "./../features/wizard/types/Investigator";
import { defineStore } from "pinia";
import investigatorService from "@/api/investigatorService";
import { Gender } from "@/features/wizard/types/Gender";

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

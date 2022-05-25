import type { CreateInvestigator } from "./../features/wizard/types/CreateInvestigator";
import type { Investigator } from "./../features/wizard/types/Investigator";
import { defineStore } from "pinia";
import investigatorService from "@/api/investigatorService";

export const investigatorStore = defineStore({
  id: "investigator",
  state: () => ({
    investigator: {} as Investigator,
  }),
  actions: {
    async saveInvestigator(investigator: CreateInvestigator) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      investigator = await investigatorService.create(investigator);
    },
  },
});

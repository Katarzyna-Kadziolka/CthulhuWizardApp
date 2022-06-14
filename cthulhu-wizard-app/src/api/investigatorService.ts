import http from "./../api/apiClient";
import type { Investigator } from "./../features/wizard/types/Investigator";
import type { CreateInvestigator } from "./../features/wizard/types/CreateInvestigator";

class investigatorService {
  create(investigator: CreateInvestigator): Promise<Investigator> {
    return http.post("/Investigators", investigator);
  }
}

export default new investigatorService();

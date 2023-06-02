import http from "./../api/apiClient";
import type { Investigator } from "./../features/wizard/types/Investigator";
import type { CreateInvestigator } from "./../features/wizard/types/CreateInvestigator";

class investigatorService {
  async create(investigator: CreateInvestigator): Promise<Investigator> {
    const response = await http.post("Investigators", investigator);
    return response.data;
  }
}

export default new investigatorService();

import http from "./../api/apiClient";
import type { Occupation } from "./../features/wizard/types/Occupation";

class occupationService {
  getOccupations(): Promise<Array<Occupation>> {
    return http.get("Occupations");
  }
  getOccupationDetails(id: string) {
    return http.get(`Occupations/${id}`);
  }
}

export default new occupationService();

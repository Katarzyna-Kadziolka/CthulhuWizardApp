import http from "./../api/apiClient";
import type { Occupation } from "./../features/wizard/types/Occupation";

class occupationService {
  async getOccupations(): Promise<Occupation[]> {
    const response = await http.get("Occupations");
    return response.data as Occupation[];
  }
  async getOccupationDetails(id: string) {
    const response = await http.get(`Occupations/${id}`);
    return response.data;
  }
}

export default new occupationService();

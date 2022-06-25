import type { Characteristic } from "./../wizard/types/Characteristic";
import type { Investigator } from "./../wizard/types/Investigator";
import type * as yup from "yup";
import { computed } from "vue";
import { getSchemaFor } from "./Validation";

export function useWizard() {
  const getErrors = (data: Investigator | Characteristic) =>
    computed(() => {
      try {
        const schema = getSchemaFor(data);
        schema.validateSync(data, {
          abortEarly: false,
        });
        return [];
      } catch (error) {
        const validationError = error as yup.ValidationError;
        return validationError.inner;
      }
    });

  return { getErrors };
}

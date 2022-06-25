import type { Characteristic } from "../wizard/types/Characteristic";
import type { Investigator } from "./../wizard/types/Investigator";
import * as yup from "yup";

export function getSchemaFor(data: Investigator | Characteristic) {
  if (isInvestigator(data)) {
    return personalDataSchema;
  }
  if (isCharacteristic(data)) {
    return characteristicSchema;
  }
  throw Error("Invalid data type for schema");
}

function isInvestigator(data: Investigator | Characteristic) {
  return "FirstName" in data;
}
function isCharacteristic(data: Investigator | Characteristic) {
  return "Strength" in data;
}

const personalDataSchema = yup.object().shape({
  FirstName: yup.string().required("Name cannot be empty"),
  Age: yup.number().typeError("Age cannot be empty").required().min(15).max(90),
});

const characteristicSchema = yup.object().shape({
  Strength: yup
    .number()
    .typeError("Strength cannot be empty")
    .required()
    .min(0)
    .max(99),
  Constitution: yup
    .number()
    .typeError("Constitution cannot be empty")
    .required()
    .min(0)
    .max(99),
  Size: yup
    .number()
    .typeError("Size cannot be empty")
    .required()
    .min(0)
    .max(99),
  Dexterity: yup
    .number()
    .typeError("Dexterity cannot be empty")
    .required()
    .min(0)
    .max(99),
  Appearance: yup
    .number()
    .typeError("Appearance cannot be empty")
    .required()
    .min(0)
    .max(99),
  Intelligence: yup
    .number()
    .typeError("Intelligence cannot be empty")
    .required()
    .min(0)
    .max(99),
  Power: yup
    .number()
    .typeError("Power cannot be empty")
    .required()
    .min(0)
    .max(90),
  Education: yup
    .number()
    .typeError("Education cannot be empty")
    .required()
    .min(0)
    .max(99),
  Luck: yup
    .number()
    .typeError("Luck cannot be empty")
    .required()
    .min(0)
    .max(99),
});

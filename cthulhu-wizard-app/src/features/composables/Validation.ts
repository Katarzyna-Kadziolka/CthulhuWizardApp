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
  return "firstName" in data;
}
function isCharacteristic(data: Investigator | Characteristic) {
  return "strength" in data;
}

const personalDataSchema = yup.object().shape({
  firstName: yup.string().required("Name cannot be empty"),
  age: yup.number().typeError("Age cannot be empty").required().min(15).max(90),
});

const characteristicSchema = yup.object().shape({
  strength: yup
    .number()
    .typeError("Strength cannot be empty")
    .required()
    .min(1)
    .max(99),
  constitution: yup
    .number()
    .typeError("Constitution cannot be empty")
    .required()
    .min(1)
    .max(99),
  size: yup
    .number()
    .typeError("Size cannot be empty")
    .required()
    .min(1)
    .max(99),
  dexterity: yup
    .number()
    .typeError("Dexterity cannot be empty")
    .required()
    .min(1)
    .max(99),
  appearance: yup
    .number()
    .typeError("Appearance cannot be empty")
    .required()
    .min(1)
    .max(99),
  intelligence: yup
    .number()
    .typeError("Intelligence cannot be empty")
    .required()
    .min(1)
    .max(99),
  power: yup
    .number()
    .typeError("Power cannot be empty")
    .required()
    .min(1)
    .max(90),
  education: yup
    .number()
    .typeError("Education cannot be empty")
    .required()
    .min(1)
    .max(99),
  luck: yup
    .number()
    .typeError("Luck cannot be empty")
    .required()
    .min(1)
    .max(99),
});

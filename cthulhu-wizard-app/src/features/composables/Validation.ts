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
    .min(1, "Stregth must be greater than or equal to 1")
    .max(99, "Stregth must be less than or equal to 99"),
  constitution: yup
    .number()
    .typeError("Constitution cannot be empty")
    .required()
    .min(1, "Constitution must be greater than or equal to 1")
    .max(99, "Constitution must be less than or equal to 99"),
  size: yup
    .number()
    .typeError("Size cannot be empty")
    .required()
    .min(1, "Size must be greater than or equal to 1")
    .max(99, "Size must be less than or equal to 99"),
  dexterity: yup
    .number()
    .typeError("Dexterity cannot be empty")
    .required()
    .min(1, "Dexterity must be greater than or equal to 1")
    .max(99, "Dexterity must be less than or equal to 99"),
  appearance: yup
    .number()
    .typeError("Appearance cannot be empty")
    .required()
    .min(1, "Appearance must be greater than or equal to 1")
    .max(99, "Appearance must be less than or equal to 99"),
  intelligence: yup
    .number()
    .typeError("Intelligence cannot be empty")
    .required()
    .min(1, "Intelligence must be greater than or equal to 1")
    .max(99, "Intelligence must be less than or equal to 99"),
  power: yup
    .number()
    .typeError("Power cannot be empty")
    .required()
    .min(1, "Power must be greater than or equal to 1")
    .max(90, "Power must be less than or equal to 99"),
  education: yup
    .number()
    .typeError("Education cannot be empty")
    .required()
    .min(1, "Education must be greater than or equal to 1")
    .max(99, "Education must be less than or equal to 99"),
  luck: yup
    .number()
    .typeError("Luck cannot be empty")
    .required()
    .min(1, "Luck must be greater than or equal to 1")
    .max(99, "Luck must be less than or equal to 99"),
});

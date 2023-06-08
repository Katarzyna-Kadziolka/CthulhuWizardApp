export enum DamageBonus {
  None = "None",
  MinusTwo = "MinusTwo",
  MinusOne = "MinusOne",
  Zero = "Zero",
  PlusOneDiceFour = "PlusOneDiceFour",
  PlusOneDiceSix = "PlusOneDiceSix",
}

export const DamangeBonusDescrption: { [key in DamageBonus]: string } = {
  [DamageBonus.None]: "None",
  [DamageBonus.MinusTwo]: "-2",
  [DamageBonus.MinusOne]: "-1",
  [DamageBonus.Zero]: "0",
  [DamageBonus.PlusOneDiceFour]: "+1D4",
  [DamageBonus.PlusOneDiceSix]: "+1D6",
};

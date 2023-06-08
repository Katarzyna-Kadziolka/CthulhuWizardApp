export enum Build {
  None,
  MinusTwo = "MinusTwo",
  MinusOne = "MinusOne",
  Zero = "Zero",
  One = "One",
  Two = "Two",
}

export const BuildDescrption: { [key in Build]: string } = {
  [Build.None]: "None",
  [Build.MinusTwo]: "-2",
  [Build.MinusOne]: "-1",
  [Build.Zero]: "0",
  [Build.One]: "1",
  [Build.Two]: "2",
};

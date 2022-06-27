export function getInfoForAge(age: number) {
  if (age < 20) {
    return "Deduct 5 points amongst strength and size. Deduct 5 points from education. Roll twice to generate a Luck score and use the higher value.";
  }
  if (age < 40) {
    return "Make an improvement check for education.";
  }
  if (age < 50) {
    return "Make 2 improvement checks for education and deduct 5 points among strength, constitution or dexterity, and reduce appearance by 5.";
  }
  if (age < 60) {
    return "Make 3 improvement checks for education and deduct 10 points among strength, constitution or dexterity, and reduce appearance by 10.";
  }
  if (age < 70) {
    return "Make 4 improvement checks for education and deduct 20 points among strength, constitution or dexterity, and reduce appearance by 15.";
  }
  if (age < 80) {
    return "Make 4 improvement checks for education and deduct 40 points among strength, constitution or dexterity, and reduce appearance by 20.";
  }
  return "Make 4 improvement checks for education and deduct 80 points among strength, constitution or dexterity, and reduce appearance by 25.";
}

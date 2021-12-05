export { romanConvertor };
//Array for romans ones
const romanNumbersOnes = [
  "",
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
];
//Array for romans tens
const romanNumbersTens = [
  "",
  "X",
  "XX",
  "XXX",
  "XL",
  "L",
  "LX",
  "LXX",
  "LXXX",
  "XC",
];
//Array for romans hundreds
const romanNumbersHundreds = [
  "",
  "C",
  "CC",
  "CCC",
  "CD",
  "D",
  "DC",
  "DCC",
  "DCCC",
  "CM",
];
//Array for romans thousands
const romanNumbersThousands = ["", "M", "MM", "MMM", "MMMM"];

// Roman Convertor function
function romanConvertor(num) {
  let romanNumbs = "";
  let numberInString = num.toString().padStart(4, "0").split("");

  let thousandsText = romanNumbersThousands[numberInString[0]];
  let hundredsText = romanNumbersHundreds[numberInString[1]];
  let tensText = romanNumbersTens[numberInString[2]];
  let onesText = romanNumbersOnes[numberInString[3]];
  return (romanNumbs = thousandsText + hundredsText + tensText + onesText);
}

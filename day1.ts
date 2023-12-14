export function calibrationValue(input: string): number {
  let digits: number[] = [];
  for (let i = 0; i < input.length; i++) {
    let digit = parseInt(input[i]);
    if (!isNaN(digit)) {
      digits.push(digit);
    }
  }
  return (digits[0] * 10) + digits[digits.length - 1];
}

const textDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export function correctedCalibrationValue(input: string): number {
  let digits: number[] = [];
  for (let i = 0; i < input.length; i++) {
    let digit = parseInt(input[i]);
    if (!isNaN(digit)) {
      digits.push(digit);
    } else {
      const sub = input.substring(i);

      for(let j = 0; j < textDigits.length; j++) {
        if (sub.startsWith(textDigits[j])) {
          digits.push(j + 1);
          break;
        }
      }
    }
  }
  return (digits[0] * 10) + digits[digits.length - 1];
}

const data = await Bun.file("calibration.txt").text();
const totalCalibration = data.split("\n").map((line) => {
  return calibrationValue(line);
}).reduce((a, b) => a + b, 0);

console.log("Part 1 result", totalCalibration);

const totalCorrectedCalibration = data.split("\n").map((line) => {
  return correctedCalibrationValue(line);
}).reduce((a, b) => a + b, 0);

console.log("Part 2 result", totalCorrectedCalibration);



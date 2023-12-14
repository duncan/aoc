import { it, expect } from "bun:test";
import { calibrationValue, correctedCalibrationValue } from "./day1";


it("parse digits", () => {
  expect(calibrationValue("1abc2")).toEqual(12);
  expect(calibrationValue("pqr3stu8vwx")).toEqual(38);
  expect(calibrationValue("a1b2c3d4e5f")).toEqual(15);
  expect(calibrationValue("treb7uchet")).toEqual(77);
});

it("parse numbers", () => {
  expect(correctedCalibrationValue("two1nine")).toEqual(29);
  expect(correctedCalibrationValue("eightwothree")).toEqual(83);
  expect(correctedCalibrationValue("abcone2threexyz")).toEqual(13);
  expect(correctedCalibrationValue("xtwone3four")).toEqual(24);
  expect(correctedCalibrationValue("4nineeightseven2")).toEqual(42);
  expect(correctedCalibrationValue("zoneight234")).toEqual(14);
  expect(correctedCalibrationValue("7pqrstsixteen")).toEqual(76);
});
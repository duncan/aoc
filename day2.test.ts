import { it, expect, describe } from "bun:test";
import {
  parseGame,
  isTurnPossible,
  isGamePossible,
  fewestCubesForGame,
  powerOfTurn
} from "./day2";

const game1 = {
  id: 1,
  turns: [
    { red: 4, blue: 3, green: 0 },
    { red: 1, blue: 6, green: 2 },
    { red: 0, blue: 0, green: 2 },
  ],
};

const game2 = {
  id: 2,
  turns: [
    { red: 0, blue: 1, green: 2 },
    { red: 1, blue: 4, green: 3 },
    { red: 0, blue: 1, green: 1 },
  ],
};

const game3 = {
  id: 3,
  turns: [
    { red: 20, blue: 6, green: 8 },
    { red: 4, blue: 5, green: 13 },
    { red: 1, blue: 0, green: 5 },
  ],
};

const game4 = {
  id: 4,
  turns: [
    { red: 3, blue: 6, green: 1 },
    { red: 6, blue: 0, green: 3 },
    { red: 14, blue: 15, green: 3 },
  ],
};

const game5 = {
  id: 5,
  turns: [
    { red: 6, blue: 1, green: 3 },
    { red: 1, blue: 2, green: 2 },
  ],
};

describe("parseGame", () => {
  it("parses game 1", () => {
    expect(
      parseGame("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")
    ).toEqual(game1);
  });

  it("parses game 2", () => {
    expect(
      parseGame(
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue"
      )
    ).toEqual(game2);
  });

  it("parses game 3", () => {
    expect(
      parseGame(
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red"
      )
    ).toEqual(game3);
  });

  it("parses game 4", () => {
    expect(
      parseGame(
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red"
      )
    ).toEqual(game4);
  });

  it("parses game 5", () => {
    expect(
      parseGame("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green")
    ).toEqual(game5);
  });
});

describe("isTurnPossible", () => {
  it("returns true for valid turn", () => {
    expect(isTurnPossible({ red: 0, blue: 0, green: 0 })).toEqual(true);
    expect(isTurnPossible({ red: 4, blue: 3, green: 0 })).toEqual(true);
    expect(isTurnPossible({ red: 12, blue: 14, green: 13 })).toEqual(true);
  });
  it("returns false for invalid turn", () => {
    expect(isTurnPossible({ red: 20, blue: 3, green: 1 })).toEqual(false);
    expect(isTurnPossible({ red: 1, blue: 20, green: 1 })).toEqual(false);
    expect(isTurnPossible({ red: 1, blue: 3, green: 20 })).toEqual(false);
  });
});

describe("isGamePossible", () => {
  it("returns true for valid game", () => {
    expect(isGamePossible(game1)).toEqual(true);
    expect(isGamePossible(game2)).toEqual(true);
    expect(isGamePossible(game3)).toEqual(false);
    expect(isGamePossible(game4)).toEqual(false);
    expect(isGamePossible(game5)).toEqual(true);
  });
});

describe("fewestCubes", () => {
  it("returns the fewest cubes for game 1", () => {
    expect(fewestCubesForGame(game1)).toEqual({ red: 4, blue: 6, green: 2 });
  });
  it("returns the fewest cubes for game 2", () => {
    expect(fewestCubesForGame(game2)).toEqual({ red: 1, blue: 4, green: 3 });
  });
  it("returns the fewest cubes for game 3", () => {
    expect(fewestCubesForGame(game3)).toEqual({ red: 20, blue: 6, green: 13 });
  });
  it("returns the fewest cubes for game 4", () => {
    expect(fewestCubesForGame(game4)).toEqual({ red: 14, blue: 15, green: 3 });
  });
  it("returns the fewest cubes for game 5", () => {
    expect(fewestCubesForGame(game5)).toEqual({ red: 6, blue: 2, green: 3 });
  });
});

describe("powerOfTurn", () => {
  it("returns the power of turn 1", () => {
    expect(powerOfTurn({ red: 4, blue: 6, green: 2 })).toEqual(4 * 6 * 2);
  });
  it("returns the power of turn 2", () => {
    expect(powerOfTurn({ red: 1, blue: 4, green: 3 })).toEqual(1 * 4 * 3);
  });
  it("returns the power of turn 3", () => {
    expect(powerOfTurn({ red: 20, blue: 6, green: 13 })).toEqual(20 * 6 * 13);
  });
  it("returns the power of turn 4", () => {
    expect(powerOfTurn({ red: 14, blue: 15, green: 3 })).toEqual(14 * 15 * 3);
  });
  it("returns the power of turn 5", () => {
    expect(powerOfTurn({ red: 6, blue: 2, green: 3 })).toEqual(6 * 2 * 3);
  });
});

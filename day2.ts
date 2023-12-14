interface Game {
  id: number;
  turns: Turn[];
}

interface Turn {
  red: number;
  blue: number;
  green: number;
}

const R = 12;
const G = 13;
const B = 14;

export function parseGame(game: string): Game {
  const colon = game.indexOf(":");
  const title = game.substring(0, colon);
  const id = parseInt(title.substring(5));

  const turns = game.substring(colon + 2).split(";").map((turn) => {
    let red = 0;
    let blue = 0;
    let green = 0;

    turn.split(",").map((color) => {
      const [count, colorName] = color.trim().split(" ");
      switch (colorName) {
        case "red": red = parseInt(count); break;
        case "blue": blue = parseInt(count); break;
        case "green": green = parseInt(count); break;
      }
    });

    return { red, blue, green };
  });
  return {id: id, turns: turns};
}

export function isGamePossible(game: Game): boolean {
  const invalidGames = game.turns.reduce((count, turn) => {
    if (turn.red > R || turn.blue > B || turn.green > G) {
      return count + 1;
    }
    return count;
  }, 0);

  return invalidGames === 0;
}

export function isTurnPossible(turn: Turn): boolean {
  return turn.red <= R && turn.blue <= B && turn.green <= G;
}

export function fewestCubesForGame(game: Game): Turn {
  const turns = game.turns;

  return turns.reduce((fewest, turn) => {
    if (turn.red > fewest.red) {
      fewest.red = turn.red;
    }
    if (turn.blue > fewest.blue) {
      fewest.blue = turn.blue;
    }
    if (turn.green > fewest.green) {
      fewest.green = turn.green;
    }
    return fewest;
  }, { red: 0, blue: 0, green: 0 });
}

export function powerOfTurn(turn: Turn): number {
  return turn.red * turn.blue * turn.green;
}

const data = await Bun.file("day2-input.txt").text();

const validGames = data.split("\n").reduce((validGames, line) => {
  const game = parseGame(line);
  if (isGamePossible(game)) {
    validGames.push(game.id);
  }
  return validGames;
}, []);

const idSum = validGames.reduce((sum, game) => sum + game, 0)

console.log("Part 1 Result:", idSum); 

const powerSum = data.split("\n").reduce((sum, line) => {
  const game = parseGame(line);
  const fewest = fewestCubesForGame(game);
  return sum + powerOfTurn(fewest);
}, 0);

console.log("Part 2 Result:", powerSum);
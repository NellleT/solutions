// Codewars: Maze Runner
// 6 kyu: https://www.codewars.com/kata/58663693b359c4a6560001d6

function mazeRunner(maze, directions) {
  let start = [];

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        start = [i, j];
      }
    }
  }

  for (let k = 0; k < directions.length; k++) {
    if (directions[k] === "N") {
      start[0] -= 1;
    } else if (directions[k] === "S") {
      start[0] += 1;
    } else if (directions[k] === "W") {
      start[1] -= 1;
    } else if (directions[k] === "E") {
      start[1] += 1;
    }

    if (start[0] < 0 || start[1] < 0 || start[0] >= maze.length || start[1] >= maze.length) {
      return "Dead";
    }

    if (maze[start[0]][start[1]] === 1) {
      return "Dead";
    }

    if (maze[start[0]][start[1]] === 3) {
      return "Finish";
    }
  }

  return "Lost";
}
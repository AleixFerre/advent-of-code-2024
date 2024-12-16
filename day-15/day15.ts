class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y);
  }
}

const DIRECTIONS: Record<string, Vector2> = {
  '^': new Vector2(0, -1),  // Top
  '>': new Vector2(1, 0),   // Right
  'v': new Vector2(0, 1),   // Bottom
  '<': new Vector2(-1, 0),  // Left
}

export async function day15() {
  const path = "day-15/input.txt";
  const file = await Bun.file(path).text();

  const parts = file.split('\n\n');
  const maze = parts[0].split('\n').map(p => p.split(''));
  const moves = parts[1].split('').filter(p => p !== '\n');

  const player: Vector2 = findChar(maze, '@');

  console.table(maze);
  console.log(moves);
  console.log(player);
}

function findChar(matrix: string[][], searchChar: string): Vector2 {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === searchChar) {
        return new Vector2(i, j);
      }
    }
  }

  console.warn("Player not found. Wtf bro where you at??");
  return new Vector2(-1, -1);
}
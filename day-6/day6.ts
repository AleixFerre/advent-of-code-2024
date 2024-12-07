interface Vector2 {
  x: number;
  y: number;
}

const DIRECTIONS: Vector2[] = [
  { x: -1, y: 0 }, // UP
  { x: 0, y: 1 }, // RIGHT
  { x: 1, y: 0 }, // DOWN
  { x: 0, y: -1 }, // LEFT
];

export async function day6() {
  const path = "day-6/input.txt";
  const file = await Bun.file(path).text();

  const matrix = file.split("\n").map((p) => p.split(''));

  let currentPos: Vector2 = findChar(matrix, '^');
  let directionIndex: number = 0;
  const visitedPositions: Set<string> = new Set<string>();
  visitedPositions.add(JSON.stringify(currentPos)); // First pos

  while (!isPosOutOfBounds(currentPos, 0, matrix.length - 1)) {
    // Could be multiple walls in a corner
    while (cellInFront(matrix, currentPos, DIRECTIONS[directionIndex]) === '#') {
      directionIndex = turn(directionIndex);
    }

    currentPos = add(currentPos, DIRECTIONS[directionIndex]);
    visitedPositions.add(JSON.stringify(currentPos));
  }

  console.log(visitedPositions.size);
}

function findChar(matrix: string[][], searchChar: string): Vector2 {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === searchChar) {
        return { x: i, y: j };
      }
    }
  }

  console.warn("Player not found. Wtf bro where you at??");
  return { y: -1, x: -1 };
}

function turn(currentIndex: number): number {
  return (currentIndex + 1) % DIRECTIONS.length;
}

function add(a: Vector2, b: Vector2): Vector2 {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  }
}

function isPosOutOfBounds(n: Vector2, min: number, max: number): boolean {
  return isOutOfBounds(n.x, min, max) || isOutOfBounds(n.y, min, max);
}

function isOutOfBounds(n: number, min: number, max: number): boolean {
  return n < min || n >= max;
}

function cellInFront(matrix: string[][], currentPos: Vector2, direction: Vector2): string {
  return matrix[currentPos.x + direction.x][currentPos.y + direction.y];
}

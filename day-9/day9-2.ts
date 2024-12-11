export async function day9_2() {
  const path = "day-9/input.txt";
  const file = await Bun.file(path).text();

  const values = file.split("").map(p => parseInt(p));

  const str: string[] = [];
  const points: number[][] = [];

  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (i % 2 === 0) {
      for (let j = 0; j < element; j++) {
        str.push((i / 2).toString());
      }
    } else {
      const currentPoints = [];
      for (let j = 0; j < element; j++) {
        currentPoints.push(str.length);
        str.push('.');
      }
      if (currentPoints.length) points.push(currentPoints);
    }
  }

  console.log(str);

  let currentStr = str[str.length - 1];

  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === currentStr[0]) {
      currentStr += str[i];
    } else {
      if (currentStr[0] !== '.') {
        console.log(currentStr.length);

        const slotIndex = findFirstFittedSlot(points, currentStr.length);
        if (slotIndex !== null) {
          if (points[slotIndex][0] > i) break;

          for (let j = 0; j < currentStr.length; j++) {
            const swapIndex = points[slotIndex][j];
            // console.log(str[i + j + 1], i + j + 1);
            swapIndexes(str, swapIndex, i + j + 1);
          }

          // Remove the used points from the array for future iterations
          points[slotIndex].splice(0, currentStr.length);
        }
      }

      currentStr = str[i];
    }
  }

  let total = 0;
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    const num = str[i];
    if (num === '.') continue;
    const parsedNum = parseInt(num);
    total += i * parsedNum;
  }

  console.log(total);
}

function swapIndexes(str: string[], i1: number, i2: number): void {
  const auxA = str[i1];
  str[i1] = str[i2];
  str[i2] = auxA;
}

function findFirstFittedSlot(points: number[][], sizeToFit: number): number | null {
  for (let i = 0; i < points.length; i++) {
    if (points[i].length >= sizeToFit) return i;
  }

  return null;
}

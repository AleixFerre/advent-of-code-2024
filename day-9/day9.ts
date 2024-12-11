export async function day9() {
  const path = "day-9/input.txt";
  const file = await Bun.file(path).text();

  const values = file.split("").map(p => parseInt(p));

  const str: string[] = [];
  const points: number[] = [];

  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (i % 2 === 0) {
      for (let j = 0; j < element; j++) {
        str.push((i / 2).toString())
      }
    } else {
      for (let j = 0; j < element; j++) {
        str.push('.');
        points.push(str.length - 1);
      }
    }
  }

  let checksumStr = [...str];

  let pointsIndex = 0;
  for (let i = checksumStr.length - 1; i >= 0; i--) {
    if (checksumStr[i] === '.') continue;
    const currentPointIndex = points[pointsIndex];
    if (currentPointIndex > i) break;
    checksumStr = swapIndexes(checksumStr, i, currentPointIndex);
    pointsIndex++;
  }

  let total = 0;

  for (let i = 0; i < checksumStr.length; i++) {
    const num = checksumStr[i];
    if (num === '.') break;
    const parsedNum = parseInt(num);
    total += i * parsedNum;
  }

  console.log(total);
}

function swapIndexes(str: string[], i1: number, i2: number): string[] {
  const strCopy = [...str];
  strCopy[i1] = str[i2];
  strCopy[i2] = str[i1];
  return strCopy;
}
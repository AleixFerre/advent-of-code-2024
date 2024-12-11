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

  console.log(str.join(''));
  console.log(points);

  let currentStr = str[str.length - 1];
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '.') continue;
    if (str[i] === currentStr[0]) {
      currentStr += str[i];
    } else {
      console.log(currentStr.length);

      currentStr = str[i];
    }
  }


  console.log(str.join(''));

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    const num = str[i];
    if (num === '.') break;
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
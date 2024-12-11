export async function day9() {
  const path = "day-9/input.txt";
  const file = await Bun.file(path).text();

  const values = file.split("").map(p => parseInt(p));

  let str = '';

  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    if (i % 2 === 0) {
      str += multString((i / 2).toString(), element);
    } else {
      str += multString('.', element);
    }
  }

  let checksumStr = str.split('');

  for (let i = 0; i < checksumStr.length; i++) {
    const char = checksumStr[i];
    if (char === '.') {
      const lastIndex = checksumStr.length - i - 1;
      if (checksumStr[lastIndex] === '.') continue;
      if (i > lastIndex) break;

      checksumStr = swapIndexes(checksumStr, i, lastIndex);
    }
  }

  console.log(checksumStr.join(''));
  console.log('0099811188827773336446555566..............');
}

function multString(str: string, times: number): string {
  let finalStr = '';

  for (let i = 0; i < times; i++) {
    finalStr += str;
  }

  return finalStr;
}

function swapIndexes(str: string[], i1: number, i2: number): string[] {
  const strCopy = [...str];
  strCopy[i1] = str[i2];
  strCopy[i2] = str[i1];
  return strCopy;
}
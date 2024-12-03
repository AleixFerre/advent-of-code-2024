import { day1 } from "./day-1/day1";
import { day1_2 } from "./day-1/day1-2";
import { day2 } from "./day-2/day2";
import { day2_2 } from "./day-2/day2-2";
import { day2_2_optimized } from "./day-2/day2-2_optimized";
import { day3 } from "./day-3/day3";
import { day3_2 } from "./day-3/day3-2";

const daysFunctions: Function[][] = [
  [day1, day1_2],
  [day2, day2_2, day2_2_optimized],
  [day3, day3_2]
];

const dayStr = Bun.env.DAY!;

const desiredDay = parseInt(dayStr) - 1;
if (0 <= desiredDay && desiredDay < daysFunctions.length) {
  computeDay(desiredDay);
} else {
  computeAllDays();
}

async function computeAllDays() {
  console.log("Computing all days");

  for (let i = 0; i < daysFunctions.length; i++) {
    console.log(`Results of Day ${i + 1}`);
    await computeDay(i);
  }
}

async function computeDay(index: number) {
  console.log(`\n--- Results of Day ${index + 1} --- \n`);
  for (let i = 0; i < daysFunctions[index].length; i++) {
    console.log(`-- Calculating problem ${i + 1} --`);
    await daysFunctions[index][i]();
  }
}

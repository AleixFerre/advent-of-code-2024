import { day1 } from "./day-1/day1";
import { day1_2 } from "./day-1/day1-2";
import { day2 } from "./day-2/day2";
import { day2_2_optimized } from "./day-2/day2-2_optimized";
import { day3 } from "./day-3/day3";
import { day3_2 } from "./day-3/day3-2";
import { day4 } from "./day-4/day4";
import { day4_2 } from "./day-4/day4-2";
import { day5 } from "./day-5/day5";
import { day5_2 } from "./day-5/day5-2";
import { day6 } from "./day-6/day6";
import { day6_2_optimized } from "./day-6/day6-2_optimized";
import { day6_2 } from "./day-6/day6-2";

const daysFunctions: Function[][] = [
  [day1, day1_2],
  [day2, day2_2_optimized],
  [day3, day3_2],
  [day4, day4_2],
  [day5, day5_2],
  [day6, day6_2_optimized],
];

const dayStr = Bun.env.DAY!;
const desiredDay = parseInt(dayStr) - 1;

const TOTAL_TIME_LABEL = "Total time to complete";
console.time(TOTAL_TIME_LABEL);

if (0 <= desiredDay && desiredDay < daysFunctions.length) {
  await computeDay(desiredDay);
} else {
  await computeAllDays();
}
console.timeEnd(TOTAL_TIME_LABEL);

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

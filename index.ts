import { day1 } from "./day-1/day1";
import { day2 } from "./day-2/day2";

const days = [
    day1,
    day2
]

const dayStr = Bun.env.DAY!;

const desiredDay = parseInt(dayStr) - 1;
if (0 <= desiredDay && desiredDay < days.length) {
    console.log(`Results of Day ${dayStr}`);
    days[desiredDay]();
} else {
    computeAllDays();
}

function computeAllDays() {
    console.log("Computing all days");
    
    days.forEach((day, index) => {
        console.log(`Results of Day ${index + 1}`);
        day();
    });
}

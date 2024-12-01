export async function day1()  {
    const path = "day-1/input.txt";
    const file = await Bun.file(path).text();
    
    const allList = file.split('\n');

    // Get both the lists
    const firstList: number[] = allList.map(p => parseInt(p.split("   ")[0]));
    const secondList: number[] = allList.map(p => parseInt(p.split("   ")[1]));

    // Sort them
    const filteredFirstList = firstList.toSorted((a, b) => a - b).filter((p) => !isNaN(p));
    const filteredSecondList = secondList.toSorted((a, b) => a - b).filter((p) => !isNaN(p));

    // Find the difference
    let difference = 0;

    for (let i = 0; i < filteredFirstList.length; i++) {
        const firstElement = filteredFirstList[i];
        const secondElement = filteredSecondList[i];
        difference += Math.abs(firstElement - secondElement);
    }

    console.log(difference);
}

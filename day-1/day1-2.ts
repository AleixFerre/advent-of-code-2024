export async function day1_2() {
    const path = "day-1/input.txt";
    const file = await Bun.file(path).text();
    
    const allList = file.split('\n');

    console.log(allList.length);
    
}

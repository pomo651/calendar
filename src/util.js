export const getCalendarByMonth = (year, month) => {
    const daysForEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    const today = new Date();
    const day = today.getDay();
    let currentDays = daysForEachMonth[month]; // jan 0  
    if (month === 0) {
       let pastMonthTotal = 31;
    } else {
        pastMonthTotal = daysForEachMonth[month-1];
    }

    let pastDays = day; 
    let futureDays = 42 - currentDays - pastDays;
    let currentArray = [];
    let pastArray = [];
    let futureArray = [];

    for (let i = 1; i <= currentDays; i++) {
        currentArray[i] = i;
    }
    for (let i = day - 1; i > 0; i--) {
        pastArray[i] = pastMonthTotal;
        pastMonthTotal--;
    }
    for (let i = 1; i <= futureDays; i++) {
        futureArray[i] = i;
    }
    return [].concat(pastArray, currentArray, futureArray);
}

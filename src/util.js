export const getCalendarByMonth = (year, month) => {
    const daysForEathMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    const today = new Date();
    const day = today.getDay();
    let currentDays = daysForEathMonth[month]; // jan 0 
    let pastMonthTotal = daysForEathMonth[month-1];
    if (month === 0) {
        pastMonthTotal = 31;
    }

    let pastDays = day; 
    let futureDays = 42 - currentDays - pastDays;
    let currentArray = [];
    let PastArray = [];
    let futureArray = [];

    for (let i = 1; i <= currentDays; i++) {
        currentArray[i] = i;
    }
    for (let i = day - 1; i > 0; i--) {
        PastArray[i] = pastMonthTotal;
        pastMonthTotal--;
    }
    for (let i = 1; i <= futureDays; i++) {
        futureArray[i] = i;
    }
    return [].concat(PastArray, currentArray, futureArray);
}

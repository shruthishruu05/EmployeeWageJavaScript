
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
           return PART_TIME_HOUR;
            break;
        case IS_FULL_TIME:  
            return FULL_TIME_HOUR;
            break;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs) {
    return empHrs* WAGE_PER_HOUR;
}
{
//uc6 Arraya



let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, calcDailyWage(empHrs));

}

let empWage = calcDailyWage(totalEmpHrs);
console.log("EMPLOYEE HOURS IS : "+totalEmpHrs+" hr\nAND TOTAL WORKING DAYS : " + totalWorkingDays + "\nAND EMPLOYEE WAGE IS : " + empWage)

//UC 7A -Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total days : " + totalWorkingDays+ " Total Hrs: " +totalEmpHrs+ " Emp Wage: " +totEmpWage);

function totalWages(totalWage,dailyWage) {
    return totEmpWage+dailyWage;
}
console.log("UC7A- Emp wage with reduce: " + empDailyWageArr.reduce(totalWages,0));
console.log(empDailyWageArr);

//UC 7B - Show the Day along with daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage)
console.log("UC7B- Daily wage map");
console.log(mapDayWithWageArr);

//UC 7C - Show Days when full time wage of 160 earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C -Daily Wage Filter Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when full Tie Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC 7D -First time Fulltime wage was earned on Day: "+mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if Every Element of Full Tie is truely holding Full time wage
function isAlltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Element have full time Wage: " + fullDayWageArr.every(isAlltimeWage));

//UC 7F - Check if there is any part time wage
function isAnypartTieWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F- Check if any part time wage : "+ mapDayWithWageArr.some(isAlltimeWage));

//UC 7G -Find the number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage) {
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G- Number od days Emp Worked "+ empDailyWageArr.reduce(totalDaysWorked,0));

console.log(empDailyWageMap);

function totalWage(totalWage,dailyWage) {
    return totalWage+dailyWage;
}
console.log("UC7A -Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//UC9 Arrow Functions
    const findTotal = (totalVal,dailyVal) => {return totalVal+dailyVal; }

    let count = 0;
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0)
                       .reduce(findTotal,0);
    console.log("UC9A - Emp Wage with Arrow: " + "Total Hous: " +totalHours+ "total Wages :" +totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value,key,map) => {
        if(value == 160) fullWorkingDays.push(key);
        else if (value == 80) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full working days: "+fullWorkingDays);
    console.log("Part Working Days: "+partWorkingDays);
    console.log("Non working days :" +nonWorkingDays);
    console.log(empDailyWageMap);
}
//UC10
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArray = new Array();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArray.push(
        {
            dayNum : totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay' + this.dayNum + '=> Working Hours is ' +this.dailyHours + 'And Wage Earned = ' +this.dailyWage

            },
        });   
}

console.log("UC 10 Showing Daily worked and wage earned: " +empDailyHrsAndWageArray);
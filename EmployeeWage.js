
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

//uc6 Arraya

function calcDailyWage(empHrs) {
    return empHrs* WAGE_PER_HOUR;
}


let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays ++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("EMPLOYEE HOURS IS : "+totalEmpHrs+" hr\nAND TOTAL WORKING DAYS : " + totalWorkingDays + "\nAND EMPLOYEE WAGE IS : " + empWage)





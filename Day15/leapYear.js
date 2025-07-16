function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else {
        return false;
    }
}
const isLeap1 = isLeapYear(1900);
const isLeap2 = isLeapYear(2400);
const isLeap3 = isLeapYear(2600);

console.log(isLeap1,isLeap2,isLeap3);
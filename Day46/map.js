const numbers = [11, 22, 33, 44, 55];

const doubled = []

for(const num of numbers){
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);

//using map.......
const number = [2, 4, 6, 8, 10];

function doubleIt(num){
    return num * 2;
}
const result = number.map(doubleIt);
console.log(result);

//another way...
const digits = [5, 10 ,15, 20, 25];

const double = digits.map(digit => digit * 2);
console.log(double);

function oddAverage(numbers){
    let odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    console.log(odds);

    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log('Sum of odds =',sum);
    console.log('count =',count);
    const avg = sum/count;
    return avg;
}

const numbers = [5, 65, 78, 89, 14, 15];
const avg = oddAverage(numbers);
console.log('Average of odd numbers =',avg);
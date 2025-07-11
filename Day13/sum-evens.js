function evenNumbersOnly(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
           sum = sum + number;
        }
    }
    return sum;
}
const numbers =[4, 56, 77, 3, 88, 12];
const sum = evenNumbersOnly(numbers);
console.log('Sum of even numbers',sum);

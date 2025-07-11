function evenNumbersOnly(numbers){
    let evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            //console.log(number);
            evens.push(number);

        }
    }
    return evens;
}
const numbers =[4, 56, 77, 3, 88, 12];
const evens = evenNumbersOnly(numbers);
console.log('Even numbers are',evens);

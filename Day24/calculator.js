function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1 , num2){
    return num1 / num2;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        return add(a, b);
    }
    else if(operation === 'substract'){
        return substract(a, b);
    }
    else if(operation === 'multiply'){
        return multiply(a, b);
    }
    else if(operation === 'divide'){
        return divide(a, b);
    }
    else{
        return "only 'add' , 'substract', 'multiply', 'divide' operation are allowed";
    }
}
const result1 = calculator(12, 6, 'add');
const result2 = calculator(12, 6, 'substract');
const result3 = calculator(12, 6, 'multiply');
const result4 = calculator(12, 6, 'divide');
const result5 = calculator(12, 6, 'root');

console.log('Result1 =',result1);
console.log('Result2 =',result2);
console.log('Result3 =',result3);
console.log('Result4 =',result4);
console.log('Result5 =',result5);
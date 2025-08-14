//Default-->If value is not provided ....take this as a default 
function add(num1=10, num2=0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;

}
const sum1= add(5, 7);
const sum2 = add(5);
const sum3 = add();
//function declaration.......
function add(a, b){

    return a + b;
}
const sum = add(5,10);
console.log(sum);

//fucntion expression.....
const add2 = function(c, d){

    return c + d;
}
const sum2 = add2(10,50);
console.log(sum2);

//arrow expression......
const add3 = (a, b) => a + b;

const sum3 = add3(20, 60);
console.log(sum3);

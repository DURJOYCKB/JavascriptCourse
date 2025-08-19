//Object destructuring.............
const actor = {
    name : 'Durjoy',
    age : 23,
    Phone : '01986986087',
    Salary : 129698
}

const {Phone, age, name, Salary} = actor;

console.log(Phone);
console.log(age);
console.log(name);
console.log(Salary);

//array destructuring............
const numbers =[4, 6]
const [first, second] = numbers;

console.log(first, second);
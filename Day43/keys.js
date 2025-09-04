const glass ={
    name : 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

console.log(glass);

//all properties names
const keys = Object.keys(glass);
console.log(keys);

//all properties values
const values = Object.values(glass);
console.log(values);

//Array of array/ two dimensional array
const pair =Object.entries(glass);
console.log(pair);

//remove object
delete glass.isCleaned;
console.log(glass);

//freeze
Object.freeze(glass);
glass.price = 5000;

console.log(glass);
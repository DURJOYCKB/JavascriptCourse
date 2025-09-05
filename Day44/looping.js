const numbers = [3, 4, 5, 8, 9];

for(const num of numbers){
    //console.log(num);
}

const nobab = 'Durjoy Chakraborty';

for(const char of nobab){
    console.log(char);
}

//In object...
const glass ={
    name : 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}
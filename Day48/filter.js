const players = [23, 44, 65, 49, 74, 77, 32];

//const selected = players.filter(p => p>60);
//const selected = players.filter(p => p>80);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);
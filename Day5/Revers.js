const numbers = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9];

const reversed_numbers = [];

for (let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reversed_numbers.unshift(num);
}
    console.log(reversed_numbers);


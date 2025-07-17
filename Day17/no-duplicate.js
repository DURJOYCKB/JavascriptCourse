function noduplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const numbers = [3, 6, 7, 12, 6, 29, 3, 11, 7, 13, 6];
const uniqueArray = noduplicate(numbers);
console.log(uniqueArray);
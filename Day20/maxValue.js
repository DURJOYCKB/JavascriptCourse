const height = [111,156,134,154,167,187,67,90,33,199];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(height);
console.log('Max value is :',max);
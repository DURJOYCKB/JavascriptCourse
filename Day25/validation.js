function fullName(first, second){
    if(typeof first !== 'string'){
        return 'First name should be in a string.';
    }
    else if(typeof second !== 'string'){
        return 'Second name should be in a string.';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Durjoy', 'Chakraborty');
console.log(full);

const full2 = fullName('66', 55);
console.log(full2);
function inchToFeet(inch){
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch.';
    return result;
}
const ashisHeight = inchToFeet(67);
console.log(ashisHeight);

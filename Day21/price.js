function itemNumber(shirtNumber, pantNumber, lungiNumber){
    const perShirtPrice = 500;
    const perPantPrice = 400;
    const perLungiPrice = 300;

    const totalShirtPrice = perShirtPrice * shirtNumber;
    const totalPantPrice = perPantPrice * pantNumber;
    const totalLungiPrice = perLungiPrice * lungiNumber;

    const totalAmount = totalShirtPrice + totalPantPrice + totalLungiPrice;

    return totalAmount;
}
const amount = itemNumber(4, 4, 6);
console.log('Total amount is =',amount);
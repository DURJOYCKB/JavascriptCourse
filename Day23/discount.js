function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity *  70;
        return total;
    }
}
const cost1 = discountedPrice(101);
const cost2 = discountedPrice(50);
const cost3 = discountedPrice(5201);

console.log('Total Price is: ',cost1);
console.log('Total Price is: ',cost2);
console.log('Total Price is: ',cost3);
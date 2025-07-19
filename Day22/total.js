const products = [
    {name: 'shirt', price: 500, quantity: 3},
    {name: 'pant', price: 400, quantity: 4},
    {name: 'chiruni', price: 200, quantity: 5},
    {name: 'shampoo', price: 300, quantity: 6},

]
function allTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
}
    return total;

}
const shopping = allTotal(products);
console.log(shopping);
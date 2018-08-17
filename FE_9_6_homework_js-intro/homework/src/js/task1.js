const price = parseFloat(prompt('Please enter the price of the product'));
const discount = parseFloat(prompt('Please enter the discount'));
const priceWithDiscount = price - price * discount / 100;
const saved = price - priceWithDiscount;
let output;

if(price>0&&discount>=0&&discount<=100){
    output=`Price without discount: ${+price.toFixed(2)}
Discount:${+discount.toFixed(2)}%
Price with discount: ${+priceWithDiscount.toFixed(2)}
Saved:${+saved.toFixed(2)}`;
}else {
    output='Invalid data';
}

console.log(output);
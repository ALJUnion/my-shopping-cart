let username = prompt("Please input name here:")

let product1 = prompt("Input product name here?")
let product2 = prompt("Input product 2 name here?")
let product3 = prompt("Input product 3 name here?")

let price1 = prompt("Insert price here");
let price2 = prompt(" Insert 2nd price here ");
let price3 = prompt("insert 3rd price here");
let subtotal = `Subtotal is. product ${product1 + product2 + product3} price ${price1 + price2 + price3}`

if ( product1 === "0"){
    console.log("The price can't be 0 please enter a valid price. ");
}
if ("Insert price here" + " Insert 2nd price here " + "insert 3rd price here") {
    subtotal=subtotal
}
const tax = 6.25
if (price1 + price2 + price3) {
    subtotal=subtotal *6.25
}
console.log("customerName, your grand total is:")
// variable storing the paragraph with id output
var output = document.querySelector("#output");

// Constructor function to create Hamburger object 
function Hamburger(buns,vegetables,cheeses,sauces,pattyType,pattyQuantity,quantity,others)
{
    this.buns = buns;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.patties = {
        "pattyType": pattyType,
        "pattyQuantity": pattyQuantity
    };
    this.quantity = quantity;
    this.others = others;
    this.order = function(){
        return `Your order is ready ${this.quantity} hamburgers with ${this.buns} bun and ${this.vegetables} vegetables along with ${this.cheeses} cheese and ${this.sauces} sauce and ${this.patties.pattyQuantity} ${this.patties.pattyType} patty along side extra ${this.others}.`;
    }
}

// Creating the object of Hambruger
var order1 = new Hamburger("Multi Grain",['Tomato','Onion','Lettuce'],'cheddar',['BBQ','Alfredo'],'Veggie','double',2,"Ketchup");

// Outputting the order to the html
output.textContent = order1.order();

// JavaScript source code


function hotel(id, name, description, addedDate, startPrice, country) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.addedDate = addedDate;
    this.startPrice = startPrice;
    this.country = country;
}


var h1 = new hotel(1, "Astoria1", "Astoria Hotel1", new Date(2013, 6, 21), 23, "Romania");
var h2 = new hotel(2, "Unirea1", "Unirea Hotel1", new Date(2013, 6, 21), 253, "Romania");
var h3 = new hotel(3, "Astoria2", "Astoria Hotel2", new Date(2013, 6, 21), 23, "Romania");
var h4 = new hotel(4, "Unirea2", "Unirea Hotel2", new Date(2013, 6, 21), 253, "Romania");


var lista = [h1, h2, h3];
console.log("lista initiala: " + lista+" ,nr elem:"+lista.length);
var lista1 = lista.pop();
console.log("lista pop : " + lista1 + " ,nr elem:" + lista.length);

lista4 = lista.push(h4);
console.log("lista push: " + lista4 + " ,nr elem:" + lista.length);


var lista2 = lista.shift();
console.log("lista shift: " + lista2 + " ,nr elem:" + lista.length);

var lista3 = lista.unshift(h2);
console.log("lista unshift: " + lista3 + " ,nr elem:" + lista.length);

console.log("________");

var x = JSON.stringify(h1);
console.log("stringify: x=" + x);

var y = JSON.parse(x);
console.log("parse: y=" + y);







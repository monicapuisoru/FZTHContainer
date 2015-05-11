// JavaScript source code
function hotel(id, name, description, addedDate, startPrice, country) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.addedDate = addedDate;
    this.startPrice = startPrice;
    this.country = country;
}




var h1 = new hotel(1, "Astoria", "Astoria Hotel", new Date(2013, 6, 21),  23, "Romania");
var h2 = new hotel(2, "Unirea", "Unirea Hotel", new Date(2013, 6, 21), 253, "Romania");
console.log(h1.name);
console.log(h1.addedDate);

console.log(h2.name);
console.log(h2.addedDate);



hotel.prototype.getInfo = function ()
{
    return this.name + ", " + this.country;
}



console.log(h2.getInfo());
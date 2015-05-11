// JavaScript source code



function afisareHotel()
{
    var hotel =
        {
            id: 123,
            name: "Astoria",
            description: "hotel's description",
            country: "Romania",
            addedDate: new Date(2013, 6, 21),
            startPrice: 123.34
        };
    console.log(hotel.addedDate);
    console.log(hotel.description);
    console.log(hotel.startPrice);
    console.log(hotel.country);
    console.log(hotel.name);
    console.log(hotel.id);
}

function hello() {
    console.log(arguments);
    console.log("sunt " + arguments.length + " argumente!");
    var argLen = arguments.length;
    if (argLen == 1)
        return "1 argument: hello world";
    else
        return "mai multe argumente: hello " + arguments[1];
}
console.log("call 1: " + hello("a"));
console.log("call 2: " + hello("a", "b", "c"));
//console.log("call 2: "+hello("lala"));


function makeAdder(a) {
    return function (b) {
        return a + b;
    }
}

var x = makeAdder(5);
console.log(x(6));
console.log(x(10));
var y = makeAdder(10);
console.log(y(0));
console.log(y(-10));
/*
11
15
10
0
*/

function makeAdder(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

var x = makeAdder(5);
var y = x(10);
var z = y(2);
console.log(z);
//17

var x = makeAdder(5);
var x = x(10);
var x = x(2);

console.log(makeAdder(5)(10)(10));
//25

//cream o clasa:
function car() {
    this.make = "sda";
    this.model = "asa";
    this.year = 2012;
}
//cream un obiect:
var myCarL = {
    maker: 'abs',
    model: "adasdadadadasda",
    year: 222,
}


console.log("object literal");
console.log(myCarL);

var myCar = new car();
console.log('User defined obj: ');
console.log(myCar);


var x = 22.123
console.log(x.toFixed(2));
console.log(document.getElementById('hotelsContainer'));

console.log(document.getElementById('third').getElementsByTagName('span'));

console.log(document.getElementsByClassName("right"));


console.log(document.querySelectorAll('#third span'));

console.log('#hotelsContainer')

console.log($(".right"))

console.log($('#third').children());



$('div').each(function (index, element) {
    console.log(index);
    console.log($(element).text());
});

//inlocuire elemente:
console.log($(this).attr({'class' : "sss", "id" : 'ddd'}));
});


//creare element:
var div = $('<div><span>ss</span></div>');

console.log(div.text());

//creez un div: cu clasa sss. clasa este optionala
var div = $('<div/>', {'class':'sss'});
console.log(div);
console.log(div.attr('class'));



//append:
var div = $('<div/>', {'text':'sss'});

var span = $('<span/>', {'text' : 'asdad'});

console.log("div initial: " + div.text());
console.log("span initial: " + span.text());
div.append(span);
console.log("div dupa: " + div.text());

//appendTo:
span.appendTo(div); //la fel ca mai sus

//remove:


console.log(div.text());
console.log(span.text());
div.append(span);

console.log(div.text());
span.remove();
console.log(div.text());
console.log(span.text());


//verificam daca are o clasa:
var div = $('<div/>', {'class': 'sss'});


console.log(div.hasClass('sss'));

console.log(div.attr('class'));

//toggle: daca nu exista o clasa o adauga, 
//daca exista o sterge

//evenimete:


$('button#btn').click(function(e){
    
    console.log('cliiiick');
});

//sau: independent:

$('#btn').click(function(e){
    
    console.log('cliiiick111');
});



$('#btn2').click(function(e){
    
    console.log('cliiiick222');
});

/*

<div id="main">
<button id="btn">Click me1</button>
<button id="btn2" class="a">Click me2</button>
    <button id="btn3" class="a">Click me3</button>
</div>
*/

$('#main').on('click', '.a', function(){
    console.log('click');
});


$('*').on('click', '.a', function(){
    console.log('click');
});
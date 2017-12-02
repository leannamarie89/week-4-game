

$(document).ready(function(){


var Random=Math.floor(Math.random()*101+19)

$('#number').append(Random);


var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

var total= 0;
var wins= 0;
var losses= 0;

$('#wins').append(wins);
$('#losses').append(losses);

function reset() {

total=0;

$('#number').text(total);

}


function wins(){

alert("You Win!");

wins++;

$('#wins').text(wins);
reset();

}


function lose(){

	alert("You Lose!");

	losses++;

	$('#losses').text(losses);
	reset();
}

//crystal click

$('#pink').on('click', function(){

	total = total + num1;
	console.log("new total = " + total)

$('#number').text(total)

if(total == Random)	{
	wins();
}

else if (total > Random){
	losses();
}

})

$('#blue').on('click', function(){

	total = total + num2;
	console.log("new total = " + total)

$('#number').text(total)

if(total == Random)	{
	wins();
}

else if (total > Random){
	losses();
}

})

$('#yellow').on('click', function(){

	total = total + num3;
	console.log("new total = " + total)

$('#number').text(total)

if(total == Random)	{
	wins();
}

else if (total > Random){
	losses();
}

})

$('#green').on('click', function()){

	total = total + num4;
	console.log("new total = " + total)

$('#number').text(total)

if(total == Random)	{
	wins();
}

else if (total > Random){
	losses();
}

})

});

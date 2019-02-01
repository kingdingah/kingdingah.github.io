var $ = function(id)
{
	return document.getElementById(id);
}

var generate = function()
{
	var part1 = ["Ba", "Bu", "Be", "Bo", "Bi", "Zim", "Din", "Bi", "Di", "Fla", "Zo", "Za", "Pu", "Pa", "Fu"];
	var rand1 = part1[Math.floor(Math.random() * part1.length)];
	
	var part2 = ["pon", "zim", "don", "pan", "din", "dan", "don", "shin", "flan", "drin", "sin", "wom", "lin", "lon", "tin", "fin"];
	var rand2 = part2[Math.floor(Math.random() * part2.length)];
	
	var part3 = ["go", "ge", "no", "na", "po", "so", "ke", "si", "gne", "gno", "ze", "za", "do", "yo", "gna", "ne"];
	var rand3 = part3[Math.floor(Math.random() * part3.length)];
	
	$("h1").innerHTML = rand1 + rand2 + rand3;
}

window.onload = function() 
{
	$("gen").onclick = function(){generate()}
}
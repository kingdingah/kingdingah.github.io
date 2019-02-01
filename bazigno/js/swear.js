var $ = function(id)
{
	return document.getElementById(id);
}

var generate = function()
{
	var part1 = ["Fuck", "Shit", "Arse", "Cunt", "Wank", "Piss", "Dick", "Fat", "Sad", "Gay", "Twat", "Retarded", "Skinny", "Autistic", "Leg", "Wet", "Moist", "Mouldy", "Cancer", "Chubby", "Bent", "Cripple"];
	var rand1 = part1[Math.floor(Math.random() * part1.length)];
	
	var part2 = ["face", "head", "ass", "bench", "stool", "stain", "bastard", "shovel", "spanner", "leg", "eye", "spoon", "muffin", "brick", "succ", "cancer", "faggot", "nugger"];
	var rand2 = part2[Math.floor(Math.random() * part2.length)];
	
	$("h1").innerHTML = rand1 + rand2;
}

window.onload = function() 
{
	$("gen").onclick = function(){generate()}
}
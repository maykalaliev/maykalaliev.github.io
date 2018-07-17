var openbutton = document.getElementById("openbutton");
var minimenus = document.getElementById("minimenus");
var tablemenus   = document.getElementById("tablemenus");
var closebutton = document.getElementById("closebutton");
console.log(openbutton);
openbutton.onclick = function() {
	minimenus.style.display = 'block';
	tablemenus.style.display = 'none';
}

closebutton.onclick = function () { 
	minimenus.style.display = 'none';
	tablemenus.style.display = 'block'; 
}
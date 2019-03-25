function greet() {
    window.alert("Hello everyone!");
}

function init() {

//task 1+2
    let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src = "flower2.png";
    images[3].src = "flower2.png";

//task 3
    document.getElementById("unique").innerHTML="<div><p>Your are great!</p></div>";

//task 4
    let image = document.createElement("img");
    image.src="flower2.png";
    document.getElementById("new_element").appendChild(image);

//task 5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange","yellow","green","blue","purple","pink"];
	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}

//task 6
	var changeSrc = function(event) {
		let filename = event.target.src.replace(/^.*[\\\/]/, '');
	  	if (filename == "flower1.png") {
	   		event.target.src = "flower2.png";
	  	}
	  	if (filename == "flower2.png") {
	  		event.target.src = "flower1.png";
	  	} 	
	};
	document.getElementById("event").addEventListener("mouseover", changeSrc);

}

function addItem() {
	let item = document.getElementById("buttonn").value;
	let txt = document.createTextNode(item);
	let elt = document.createElement("li");
	let liste = document.getElementById("list");
	let impt = document.getElementById("imp").checked;
	let groc = document.getElementById("gro").checked;
	if (impt) {
		elt.style.color = "red";
	}
	if (groc) {
		elt.style["text-decoration"] = "underline";
	}
	elt.appendChild(txt);
	liste.appendChild(elt);
}
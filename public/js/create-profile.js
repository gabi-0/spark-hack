
cities = city_data.split(";");

function city_find(str) {
	res_arr = new Array();

	l = str.length;
	str = str.toLowerCase();
	cities.forEach(el => {
		if(el.substr(0,l).localeCompare(str) == 0) {
			aux_str = el.split(",")[0];
			res_arr.push(aux_str[0].toUpperCase() + aux_str.substr(1));
		}
	});
	return res_arr;
}


function autocomplete(inp) {

	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value.toLowerCase();
		var l = val.length;

		closeAllLists();
		if (!val) { return false;}
	
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");

		this.parentNode.appendChild(a);

		cities.forEach(el => {
		  if(el.substr(0,l).localeCompare(val) == 0) {
			  
			aux_str = el.split(",")[0].toUpperCase();

			b = document.createElement("DIV");
			b.innerHTML = "<strong>" + val.toUpperCase() + "</strong>";
			b.innerHTML += aux_str.substr(l);

			b.innerHTML += "<input type='hidden' value='" + aux_str + "'>";
			b.addEventListener("click", function(e) {
				inp.value = this.getElementsByTagName("input")[0].value;
				closeAllLists();
			});
			a.appendChild(b);
		  }
		});
	});

	function closeAllLists(elmnt) {
	  var x = document.getElementsByClassName("autocomplete-items");
	  for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
			x[i].parentNode.removeChild(x[i]);
	  	}
	  }
	}

	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

autocomplete(document.getElementById("homecity-input"));
autocomplete(document.getElementById("desiredcity-input"));

document.getElementById("nextpg").addEventListener("click", function(e) {
	if(document.getElementById("homecity-input").value == '') return;

	document.getElementById("home-form").style.display = "none";
	document.getElementById("desired-form").style.display = "block";
	document.getElementById("image-bg").src='./img/desired.jpg'
});

sendbtn = document.getElementById("sendbtn");
sendbtn.addEventListener("click", function(e) {
	if(document.getElementById("desiredcity-input").value == '') return;

	// sendbtn.innerHTML = "Saving <img src='./img/load.gif'>";
	sendbtn.setAttribute("disabled", "true");
});
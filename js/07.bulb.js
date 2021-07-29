function changeBulb (value) {
	if (value === 'ON') {
		document.getElementById('bulb').src = "../img/on.png"
		document.getElementById('ON').style.display = 'none';
		document.getElementById('OFF').style.display = 'inline-block';
	}
	else {
		document.getElementById('bulb').src = "../img/off.png"
		document.getElementById('OFF').style.display = 'none';
		document.getElementById('ON').style.display = 'inline-block';
	}
}

function changeBulb2 (value) {
	if (value === 'OFF') {
		document.getElementById('off').style.display = 'none';
		document.getElementById('on').style.display = 'inline-block';
	}
	else {
		document.getElementById('off').style.display = 'inline-block';
		document.getElementById('on').style.display = 'none';
	}
}
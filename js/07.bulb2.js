function toggleBulb(chk) {
	var bulb = document.getElementById('bulb');
	var btOn = document.getElementById('btOn');
	var btOff = document.getElementById('btOff');
	if(chk) {
		bulb.src = '../img/on.png'
		btOn.style.display = 'none';
		btOff.style.display = 'inline-block';
	}
	else {
		bulb.src = '../img/off.png'
		btOn.style.display = 'inline-block';
		btOff.style.display = 'none';
	}
}

function toggleBulb2(chk) {
	var off = document.getElementById('off');
	var on = document.getElementById('on');
	if (chk) {
		off.style.display = 'none';
		on.style.display = 'inline-block';
	}
	else {
		off.style.display = 'inline-block';
		on.style.display = 'none';
	}
}
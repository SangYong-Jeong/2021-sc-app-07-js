/* 
기능정의서
1. changeBox('C') 가 실행되면 #stage에 .box를 생성한다.
2. changeBox('R') 가 실행되면 #stage에 .box를 삭제한다.
3. #count의 값만큼 .box를 생성한다.
*/

var i = 1;
var sum = 0;
for (; i<=10; i++) {
	sum += i  //sum = sum + i;
}
console.log(sum);

function changeBox (opt) {
	// var color = ['red', 'green', 'blue', 'orange', 'purple'];
	var stage = document.getElementById('stage'); 
	var count = document.getElementById('count'); 
	if(opt === 'C'){
		for(var i=1; i<=count.value; i++) {
			stage.innerHTML += '<div class="box"></div>';
		}
	}
	else {
		stage.innerHTML = '';
		count.value = 1;
	}
}


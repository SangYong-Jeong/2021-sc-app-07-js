/* 
기능정의서
1. createBox() 가 실행되면 #stage에 .box를 생성한다.
2. removeBox() 가 실행되면 #stage에 .box를 삭제한다.
*/

var i = 1;
var sum = 0;
for (; i<=10; i++) {
	sum += i  //sum = sum + i;
}
console.log(sum);

var stage = document.getElementById('stage'); 
function createBox () {
	stage.innerHTML += '<div class="box"></div>';
}

function removeBox () {
	stage.innerHTML = '';
}
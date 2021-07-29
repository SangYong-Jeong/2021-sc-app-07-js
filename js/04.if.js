/* 
비교연산자
==, <=, >=, <, >, === (타입까지 같아야 함)

- 내장객체
window, console, String, Number, Array, Object, Date, Math
window.document 
*/

console.log(window);
console.log(window.document);
console.log(console);
console.log(String);
console.log(Number);
console.log(Array);
console.log(Object);
console.log(Date);
console.log(Math);

function changeColor (value) {
	// alert(value === '');
	if(value === '') {
		console.log('value는 빈문자열 입니다.');
		console.log(document.getElementById('box'));
	}
	else {
		console.log('value는 ' + value + '입니다.');
	}
}
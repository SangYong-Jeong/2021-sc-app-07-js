var a = 10;
var b = 20;

//onclick="sum();" // 10, 20, undefined, undefined
//onclick="sum(30, 40);" // 10, 20, 30, 40
function sum(c, d) {
	console.log(a, b, c, d);
}
console.log(a, b); // 10, 20

// 리턴값이 있는 함수
// onclick="console.log( sum2(40, 50) );" 
// 함수에서 return을 만나면 함수가 값을 리턴하고 종결한다.
function sum2(a, b) {
	return a + b;
}
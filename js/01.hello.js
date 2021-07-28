/* 
객체(Object) 
- 속성(Property, Attribute, Variable, Member ...)
- 동작(function, method)

- 변수명/함수명으로 못쓰는 녀석들
1. 키워드
- break - case - catch - continue - debugger* - default - delete - do - else - finally - for - function - if - in - instanceof - new - return - switch - this - throw - try - typeof - var - void - while - with

2. 예약어
- abstract - boolean - byte - char - class - const - debugger - double - enum - export - extends - final - float - goto - implements - import - int - interface - long - native - package - private - protected - public - short - static - super - synchronized - throws - transient - volatile

3. 숫자나 특수문자( _ 제외 )로 시작하는 단어

- 숫자와 문자 연산
1 + 5  => 6
1 + 'A'  => "1A"
'1' + '5'  =>  "15"
"1111" + "5555"  => "11115555"
10 / 2  => 5
"10" / "2"  =>  5
"10" / "A"  => NaN(Not a number : error)
"10" * "5"  => 50
10 * 5  => 50
"10" + "5"  => "105"
"10" - "5"  => 5
*/

var a; // 변수 선언
function run() { } // 함수 선언

var a = 5;
var b = 10;
// 매개변수가 없는 함수
function sum() {
	console.log(a + b);
}
// 매개변수가 있는 함수
// onclick="alertMe('boldook', 5);"
function alertMe(a, b) {
	 // a, b => 인자/매개변수/parameter
	console.log(a, b);
}

// onclick="alertMe('boldook');"
function alertMe2(str) {
	alert('hello ' + str);
}


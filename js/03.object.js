/* 
Object: 객체

함수 선언문
function a() {

}
a();

함수 표현식
var a = function() {

}
a();
*/

// 지역변수
function aa() {
	var bb = 10; // 지역변수
	console.log(bb);
}
aa();
// console.log(bb) // 에러남 못찾음

// IIFE(즉시실행함수)
(function () {
	console.log('B 실행함');
})();

var c = function() {
	console.log('C 실행함');
}
c();

var x = 10;
console.log(x);

/* 
함수 선언문과 함수 표현식의 차이
Hoisting(끌어올리다)
함수선언문은 Hoisting의 대상이다.
함수표현식은 Hoisting의 대상이 아니다. 왜냐 변수는 호이스팅 대상이 아니
*/
console.log("========");
d();
function d() {
	console.log('D 실행함');
}

// e(); // 실행 안 되고 에러남
var e = function () {
	console.log('E 실행함');
}

/* 
- 변수를 깊이 들어가보자
1. 변수에는 모든것을 넣을 수 있다.
*/
var a;
console.log(a); //undefined

a = 10;
console.log(a); //10

a = "A";
console.log(a); //A

a = function() {
	console.log('a()를 실행함')
};
console.log(a); // function() {}
a();

// 그래서 변수가 객체(Object)가 될 수 있다.
// Human
console.log("========");
var hong = {
	name: '홍길동',
	age: 20,
	weight: 80,
	height: 180,
	run: function () {
		console.log(this.name + '이 뜁니다.');
	}
}
var hong2 = {
	name: '홍길순',
	age: 20,
	weight: 80,
	height: 180,
	run: function () {
		console.log(this.name + '이 뜁니다.');
	}
}
console.log(hong.name);
console.log(hong.age);
console.log(hong.weight);
console.log(hong.height);
hong.run();

console.log(hong);
console.log(console);

var korea = {
	human: hong

}

var earth = {
	country: korea
}

var universe = {
	star : earth
}

console.log(universe);
console.log(window); // window가 javascript에서 최상위 객체
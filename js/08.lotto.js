/* 
Math: abs(): 절대값, floor(): 버림, ceil(): 올림, round(): 반올림, random(): 난수발생
Array
- arr.length : 배열요소의 갯수
- arr.push('값') : 배열의 맨 뒤에 값을 넣는다. 
- arr.unshift('값') : 배열의 맨 앞에 값을 넣는다. 
- arr.pop(): 배열의 맨 뒤의 값을 뽑아낸다(배열이 변한다.)
- arr.shift(): 배열의 맨 앞의 값을 뽑아낸다(배열이 변한다.)
*/

// console.log( Math.abs(-1) );        // 절대값
// console.log( Math.floor(4.8) );     // 소수점 이하 버림
// console.log( Math.ceil(4.1) );      // 소수점 이하 올림
// console.log( Math.round(4.51) );    // 소수점 이하 반올림
// console.log( Math.random() );       // 0 ~ 0.999999999 까지의 난수를 발생

// 1 ~ 45까지의 난수 발생
// console.log( Math.random() * 45 );                   // 0 ~ 44.9999999999
// console.log( Math.floor( Math.random() * 45 ) );     // 0 ~ 44
// console.log( Math.floor( Math.random() * 45 ) + 1 ); // 1 ~ 45

// 200 ~ 299까지의 난수 발생
// console.log( Math.random() * 100 ); // 0 ~ 99.99999999
// console.log( Math.floor( Math.random() * 100 ) ); // 0 ~ 99
// console.log( Math.floor( Math.random() * 100 ) + 200 ); // 200 ~ 299

// console.log( random(1, 45) );

var arr = ['A', 'B'];
console.log(arr);                         // ['A', 'B']

console.log(arr.push('C'));               // 3 (배열의 갯수를 리턴)             
console.log(arr);                         // ['A', 'B', 'C']

console.log(arr.unshift('Z'));            // 4 (배열의 갯수를 리턴)  
console.log(arr);                         // ['Z', 'A', 'B', 'C']


var a = arr[2];
console.log(arr[2]);                      // B (값을 가져올 뿐 방에서 값이 나오진 않는다.) 
console.log(arr);                         // ['Z', 'A', 'B', 'C']

console.log( arr.pop() );                 // C
console.log( arr );                       // ['Z', 'A', 'B']

console.log( arr.shift() );               // Z
console.log( arr );                       // ['A', 'B']


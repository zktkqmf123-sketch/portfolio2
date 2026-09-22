/*
    아해는 자바스크립 변수 선언 및 출력 예시
*/

/*
let value = 1;  // let 변수 선언
console.log(value)  value변수에 선언된 값을 화면에 출력
value = 2;         // value변수 안에 값을 대입
console.log(value) // 다시 value변수 값을 출력
*/

//상수 선언 예제
const a = 1;
// const a = 2;
//a = 2;  // a가 상수로 선언되어 있어서 값을 바꾸면 에러
const PI = 3.14;

var b = 1;
var b = 2;
console.log(b) // var 변수는 중복 선언 가능, 마지막에 선언된 값이 출력됨

// let myName = "HEROPY"; 
// let email = 'thesecon@gmail.com';
// let hello = `Hello ${myName}?!`;
// console.log(myName);
// console.log(email);
// console.log(hello);
// document.write(myName + '<br>');
// document.write(email + '<br>');
// document.write(hello + '<br>'); 

// let number = 123;
// let opacity = 1.57;
// console.log(number);
// console.log(opacity);
// document.write(number + '<br>');
// document.write(opacity + '<br>');

// let checked = true;
// let isShow = false;
// console.log(checked);
// console.log(isShow);
// document.write(checked + '<br>');
// document.write(isShow + '<br>');

// console.log(typeof(myName));
// console.log(typeof(number));
// console.log(typeof(isShow));

// let undef;
// let obj = { Abc : 123 }
// console.log(undef);
// console.log(obj.abc);
// console.log(obj.xyz);

let user = { 
  // Key: Value, 
  name: 'HEROPY', 
  age: 85, 
  isValid: true 
}; 
console.log(user.name); 
console.log(user.age); 
console.log(user.isValid); 

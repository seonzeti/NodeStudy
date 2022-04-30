// 자바스크립트에서 함수를 선언하는 방식

call1();


// 1. 함수 선언

function call1(){
    console.log("call 호출!");
}

// 2. 함수 표현(선언된 부분 이후부터 가능함.>>이게좋음.)
call2 = function(){
    console.log("call2 호출!")
}

// 3. 호이스팅(hoisting): 실제로 자바스크립트 파일이 컴파일 될때
//                       함수나 변수를 최상위로 끌어 올려 선언하는 현상
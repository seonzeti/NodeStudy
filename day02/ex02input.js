
// HTML 파일 LiveServer로 실행해보기
// 주의할 점! HTML파일 저장, JS파일 저장, 서버 중단 후 실행 
// html파일에서 실행을 하면 url에 내용이 뜰 것!
// 이제 서버에서는 사용자가 입력한 Num1,num2를 가지고 와줘야함 

const http = require('http');

// url값을 분석할 수 있는 모듈을 가져와야한다. : require 
// url이라는 모듈을 이용해서 값을 가지고 올 것
const url = require('url');

http.createServer(function(request,response){
    console.log('server 생산 성공');
    
    // 1. 서버로 넘어오는 전체 url을 가지고 와야함
    // 2. 그 전체 url중 사용자가 입력한 값만 쏙 빼와야함 
    console.log(request.url);
    // 여기서 사용되는 url 과 위의 const url은 다른 개념! 
    // const url은 Nodejs 모듈 중 url이라는 모듈을 가지고 온 것 
    // 2번째 url은 request라는 애가 기본적으로 가지고 있는 기능중 url이라는 기능을 가지고 오는 것! 

    // 저장 -> node 실행 
    // ** / ?    id   = 123      & pw=123 -> request.url로 가져온 값 
    // **  시작   name값  value값
    // ** QueryString방식 : URL을 통해서 서버로 값을 보내는 방식 

    // url모듈을 통해서 이제 123이라는 값을 빼와보자! 
    let query = url.parse(request.url, true).query; 
    // 1 - 모듈 url / 2 - 우리가 실제로 분석해야하는 url 
    // true : 얘를 key와 value 값이라고 구분을 할 것 
    // 우리가 분석해온 값을 query 안에다가 넣어준 것 
    console.log(query);
    

    console.log('사용자가 입력한 첫번째 숫자는 '+query.num1);
    console.log('사용자가 입력한 두번째 숫자는 '+query.num2);

    // query.opr를 통해서 사용자가 원하는 연산을 출력하시오. (If) 
    console.log('사용자가 입력한 두 숫자의 합은 '+(parseInt(query.num1)+parseInt(query.num2)));
    

    // HTML URL 단톡방에 공유해서 확인 
    response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});

    // response.write('<p>사용자가 입력한 첫번째 숫자는 '+query.num1+'</p>';
    // response.write('<p>사용자가 입력한 두번째 숫자는 '+query.num2+'</p>');
    // response.write('<p>사용자가 입력한 두 숫자의 합은 '+(parseInt(query.num1)+parseInt(query.num2))+'</p>');
    



    let num1 = parseInt(query.num1);
    let num2 = parseInt(query.num2);
    let cal = query.opr;
    let res = 0;
    
    if (cal == '+'){
        res = num1+num2;
    } else if (cal == '-'){
        if(num1 > num2){
            res = num1-num2
        } else {
            res = num2-num1
        }
    } else if (cal == '*'){
        res = num1 * num2
    } else if (cal == '/'){
        if (num1 > num2){
            res = num1/num2
        } else {
            res = num2/num1
        }
    }
    
    
    response.write('<html>')
    response.write('<head><style>*{font-family:-apple-system;}</style></head>')
    response.write('<body>')
    response.write('<p>'+num1+'과 '+num2+'의 연산결과는 '+res+'입니다.</p>');

    // pm2 다운 ** 
    // 1. npm install pm2 -g 
    // 2. pm2 
    // 3. winodw powerShell 관리자로 실행 
    // 4. set-ExcutionPolicy RemoteSigned - 외부 파일 막는걸 풀어주겠다 
    // 5. Y Enter 

    // pm2 실행 ** 
    // 1. pm2 start 서버이름 --watch : 서버 파일 실행 ★
    // (watch 옵션 중요! -> 저장을 하면 알아서 Excess )
    // 2. pm2 log : 서버파일 실행 여부 파악 ★
    // 수정사항이 있을 때 무조건 log에 찍힘 
    response.write('pm2 설치 성공!')
    // 네가 방금 수정한 사항들 문제 없어! 

    // 3. 상태를 확인하고 싶다면? pm2 monit 
    // (어떻게 메모리를 사용하고 있고 어떻게 할당되고 있다 이런것들을 확인 ) -> 많이 쓰지는 않는다 

    // 4. pm2 list -> 실행되고 있는 서버파일 확인 ★
    
    // if, pm2 list 의 status가 stopped인 경우? -> 무조건 코드에 이상이 있는 것! 
    // 코드에 이상이 있을 때 수정을 하려면? 무조건 서버파일들을 죽여야한다! 
    // 5. pm2 kill -> 모든 서버파일 삭제/중지 ★ 




        response.write('</body>')
    response.write('</html>')
    

    response.end();
}).listen(3000);

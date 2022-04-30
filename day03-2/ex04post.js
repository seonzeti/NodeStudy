let http = require('http');
let url = require('url');
// 문자열을 queryString형태로 변환(name과 value값으로 분석)
let qs = require('querystring');

http.createServer(function(request, response){
    
    // request : 요청할 때 웹 브라우저가 보낸 정보
    // response : 응답할 때 웹브라우저에 보낼 정보  

    // 데이터를 누적시키기 위한 변수 선언
    let body = "";
    
    //사용자가 입력한 값을 누적하는 함수
    
    // POST방식은 GET방식과 다르게 대용량의 데이터를 전송할 수 있다
    // 그러나 데이터가 무리하게 많을 경우, 비 정상적인 동작을 할 수 있기 때문에 
    // 그러한 경우를 대비해서 데이터르 적당량씩 받아와서 function 을 실행 시킬 수 있는 함수 

    request.on('data', function(data){
        body += data;
        console.log(body);
    })

    // 더이상 가져올 데이터가 없을 때 실행되는 함수 
    // 사용자가 입력한 데이터 수신이 끝났을 때 데이터를 출력하는 함수
    request.on('end', function(){
        
        // queryString의 parse를 통해 body를(문자열을) 자동으로 분석해줌. 
        // 사용자가 보낸 정보 중 POST로 넘긴 정보를 post변수에 저장 
        let post = qs.parse(body);
        
        console.log("사용자가 입력한 ID값 : " + post.id);
        console.log("사용자가 입력한 PW값 : " + post.pw);
    })

}).listen(3006);
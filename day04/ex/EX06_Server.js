// 1. 기능별로 별도의 nodejs 파일을 만들어야 했음.>>파일이 너무 많아짐.

const http = require('http');
const url = require('url');
const qs = require('querystring');

const temp = require("./EX07_Template.js");
const { tmpdir } = require('os');
// 개발자가 만든 Template.js 모듈 불러오기


http.createServer(function(request, response){
    //get방식으로 사용자에게 값을 전달 받았을 때
    console.log("사용자가 요청한 URL" + request.url);

    // 사용자가 접근하고자 하는 기능
    let pathname = url.parse(request.url, true).pathname;
    console.log("사용자가 접근하고자하는 기능(경로) : "+pathname)
    // 사용자가 보내온 값
    let query = url.parse(request.url, true).query;
    console.log("사용자가 보내온 ID 값 : " + query.id)

    if(pathname == '/plus'){
        
        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
        let res_temp = temp.plus(query);
        response.end(res_temp);
        
    }else if (pathname== '/grade'){
        let body = "";

        request.on('data',function(data){
            body += data;
            console.log(body)
        })

        request.on('end',function(){
            let post = qs.parse(body);

            response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
            // temp함수 불러와서 return 값 받아오기, post를 넘겨주어서 실행되도록 함.          
            let res_temp = temp.grade_(post);

            response.end(res_temp);

        });

    }else if(pathname == '/join'){

        let body = "";
        

        // 사용자에게 입력받는 부분
        request.on('data', function(data){
            body += data;
            console.log(body);
        });
    
        // 출력받는 부분
        request.on('end', function(){
            let post = qs.parse(body);
            response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
            let res_temp = temp.join(post)
            response.end(res_temp);
    
        });     
    
    }

}).listen(3000);
// require : module을 가져오는 명령어 
// http모듈 : 현재 파일을 서버로 만들어주는 명령어
const http = require('http');
// url값을 분석할 수 있는 모듈 가져오기 
const url = require('url');

// http를 통해 서버를 만들어주는 작업 
http.createServer(function(request,response){
    // 서버로 넘어오는 전체 url = request.url 
    // url이라는 모듈을 통해서 사용자가 가져온 url주소 분석 
    // 우리가 분석해 온 값을 query 안에다가 넣어줌 (key & value)
    let query = url.parse(request.url,true).query;

    
    response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});
    
    let multi = parseInt(query.multi);

    response.write('<html>')
        response.write('<head><style>*{font-family:-apple-system;}table,td{border:1px solid black;}</style></head>')
        response.write('<body>')
            response.write('<table>')

            
            for (let i = 1 ; i< 10; i++){
                let res = multi * i
                // response.write('<tr><td>')
                // response.write(multi+'*'+i+'='+res);
                // response.write('</td></tr>')

                response.write(`<tr><td>${multi}*${i}=${res}</td></tr>`)
                // Template Literal방식 : 문자와 변수를 쉽게 치환할 수 있는 내장 기능 
                // ${} : 표현식 
                

                // NPM 
                // 서버를 실행시키고 중지시킬 때 더 간편하게 할 수 있는 모듈을 다운받을 것!
                // Node라는 기술이 활성화되면서 Npm 또한 활발하게 이용 중 
                // 서버 먼저 중지 시키기! 

                // npm install pm2-g
                // pm2라는 모듈을 다운로드 하겠다 (노드JS전역에)

                // 처음 외부 다운로드 받은거기때문에 권한 허락이 안되어있음 자체적으로 차단
                // 우리는 외부 권한을 풀어줘야한다 
                
            }
            response.write('</table>')
        response.write('</body>')
    response.write('</html>')

    response.end();
}).listen(3000);
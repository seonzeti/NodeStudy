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

    // console.log('server 생산 성공');
    // console.log(request.url);
    let query = url.parse(request.url, true).query; 
    // console.log(query);
    
    response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});
    let td = parseInt(query.td);


    response.write('<head><style>table,td{border:1px solid black}</style></head>')
    response.write('<table>');
        response.write('<tr>');
            for(let i = 1 ; i<= td ; i++){
                response.write('<td>'+i+'</td>')
            }
        response.write('</tr>');
    response.write('</table>');

    response.end()


}).listen(3000);
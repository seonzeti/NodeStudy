const http = require('http');
const qs = require('querystring');

http.createServer(function(request,response){
    let body = "";
    console.log('server')

    // 사용자에게 입력받는 부분
    request.on('data', function(data){
        body += data;
        console.log(body);
    });

    // 출력받는 부분
    request.on('end', function(){
        let post = qs.parse(body);
        console.log(post)

        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
        response.write("<html>");
        response.write("<body>");
        response.write(`ID : ${post.id}<br>`)
        response.write(`PW : ${post.pw}<br>`)
        response.write(`NAME : ${post.name}<br>`)
        response.write(`EMAIL : ${post.email}<br>`)
        response.write(`TEL : ${post.tel}<br>`)
        response.write(`GENDER : ${post.gender}<br>`)
        response.write(`HOBBY : ${post.hobby}<br>`)
        response.write(`B-DATE : ${post.bdate}<br>`)
        response.write(`Fav Color : ${post.color}<br>`)
        response.write(`Fav Sub : ${post.subject}<br>`)
        response.write(`Fav Sub : ${post.talk}<br>`)
        response.write("</body>");
        response.write("</html>");
        response.end();

    });     



}).listen(3000);
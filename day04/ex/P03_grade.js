const http = require('http');
const qs = require('querystring');
// 모듈로 쓰는 모든 변수의 자료형은 const로 설정

http.createServer(function(request, response){
    
    console.log('서버시작');

    let body = "";

    request.on('data',function(data){
        body += data;
        console.log(body)
    })

    request.on('end',function(){
        let post = qs.parse(body);
        let score_html = parseInt(post.score_html);
        let score_css = parseInt(post.score_css);
        let score_nodejs = parseInt(post.score_nodejs);
        let score_android = parseInt(post.score_android);
        let avg = (score_html+score_css+score_nodejs+score_android)/4;

        if(avg >= 95){
            let grade = 'A+';
        }else if(avg >= 90){
            grade = 'A';
        }else if(avg >= 85){
            grade = 'B+';
        }else if(avg >= 80){
            grade = 'B'
        }else if(avg >= 75){
            grade = 'C+'
        }else {
            grade = 'F'
        }

        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
        response.write("<html>");
        response.write("<body>");
        response.write("NAME : "+ post.name + "<br>");
        response.write("HTML : "+ score_html + "<br>");
        response.write("CSS : "+ score_css + "<br>");
        response.write("Node.js : "+ score_nodejs + "<br>");
        response.write("ANDROID : "+ score_android + "<br>");
        response.write("AVG : "+ avg + "<br>");
        response.write("GRADE : "+ grade);
        
        response.write("</body>");
        response.write("</html>");
        response.end();

    })

}).listen(3008);
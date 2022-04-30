const express = require("express");

//  ** (4) express 기능 중에서 router 기능을 가져오는 코드 
const router = express.Router(); 

// ex01_plus
router.get("/plus", function(request,response){

    response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});

    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    let cal = request.query.opr;
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
        response.write('</body>')
    response.write('</html>')
    

    response.end();
})  // ** plus라는 라우터를 생성한 것! 


// ex02_post
router.post("/post",function(request,response){

    let id = request.body.id;
    let pw = request.body.pw;

    response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"});
    response.write('<html><body>');
    response.write(`아이디 : ${id} <br> 비밀번호 : ${pw}`);
    response.write('</body></html>');
    response.end();
    
})

// mul 
router.post ("/mul",function(request,response){
    let mul = request.body.multi;

    // console.log(mul)
    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'})
    response.write('<html><body><table border=1px solid black>')
    
    for (let i = 1; i<=9 ; i++){
        response.write(`<tr><td>${mul}*${i}=${mul*i}</td></tr>`)
    }

    response.write('</table></body></html>')
    response.end();



})


router.post("/move",function(request,response){
    response.redirect("http://127.0.0.1:5500/day05_Express/public/ex01_plus.html")
    response.end();
})


router.post("/siteMove",function(request,response){

    let site = request.body.site;
    if (site == 'naver'){
        response.redirect("http://www.naver.com");
        console.log(site)
    } else if (site == 'google'){
        response.redirect("http://www.google.com");        
    } else {
        response.redirect("http://www.daum.net");
    }

    response.end();
})



module.exports = router;
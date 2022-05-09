const express = require('express');
const router = express.Router();

const conn = require('../config/DB.js');


router.post("/login",function(request,response){
    let id = request.body.id;
    let pw = request.body.pw;

    // 사용자가 입력한 ID가 smart 고, pw가 1234라면 'loginS.html' 페이지로 이동 
    // 그게 아니라면 LoginF.html 페이지로 이동하시오

    if(id == 'smart' && pw == '1234'){
        response.redirect('http://127.0.0.1:5500/day06_Express/public/02_LoginS.html');
    } else {
        response.redirect('http://127.0.0.1:5500/day06_Express/public/01_LoginF.html');
    }

    response.end();

    
})


// 회원 가입
router.post("/join",function(request,response){
    console.log('join 라우터');

    let id = request.body.id;
    let pw = request.body.pw;
    let nick = request.body.nick;

    // 기존 DB.js가 있던 위치 

    let sql = "insert into nodejs_member values (?,?,?)";
    conn.query(sql,[id,pw,nick],function(err, rows){
        // 1) sql이 실행 되면 2) 테이블 가서 입력을 함! => 명령이 성공하든 실패하든 function으로 들어옴! 
        // 3) 에러가 난다면 에러라는 변수에, 성공했다면 rows라는 변수에 뭔가가 들어가게 됨 
        if(rows){
            // rows값이 true면? 즉 명령이 성공했다면? 
            // console.log('입력 성공!')
            // console.log(rows);
            console.log('성공');
            response.redirect('http://127.0.0.1:5500/public/04_Main.html');

        }else {
            console.log('입력 실패!')
        }
    });


    
})


// 회원 삭제 
router.post("/delete",function(request,response){
    console.log('delete 라우터');

    let id = request.body.id;
    let sql = "delete from nodejs_member where id = ?";
    conn.query(sql,[id],function(err, rows){
        if(rows){
            console.log('삭제성공');
            response.redirect('http://127.0.0.1:5500/public/04_Main.html');

        }else {
            console.log('삭제 실패!')
        }
    });

    
})


// 회원 정보 수정 
router.post("/update",function(request,response){
    console.log('update 라우터');
    
    let id = request.body.id;
    let select = request.body.select;
    let data = request.body.data;
    let sql = "";
    
    // 사용자가 어떤 것을 골랐느냐에 따라서 다른 sql문을 진행해야한다.
    // select 값이 pw면 pw가 변경되는 SQL를 실행하고, 
    //           nick이면 nick이 변경되는 SQL을 실행하시오.
    
    console.log(select);  // => pw or nick
    console.log('data : '+data); // 입력한 데이터 
    
    if(select ==='pw'){
        // 비밀번호 
        sql = "update nodejs_member set pw = ? where id = ?" 
    } else {
        // nick 
        sql = "update nodejs_member set nick = ? where id = ?" 
    }
    
    
    conn.query(sql,[data, id],function(err, rows){
        if(rows){
            console.log('수정 성공!');
            response.redirect('http://127.0.0.1:5500/public/04_Main.html');
            
                    }else {
            console.log('수정 실패!')
        }
    });

    
})

// 회원 전체 검색
router.get("/select",function(request,response){
    // 링크를 통해서 서버 라우터를 호출할 때는 get 방식으로 설정!
    console.log('select 라우터');

    let sql = "select * from nodejs_member";

    conn.query(sql,function(err, rows){

        // conn.query로 들어가면 nodejs_member라는 DB에 가서 정보를 
        // 다 검색을 해온다.=> 그 정보들이 rows 안으로 다 들어감 
        
        if(rows){
            response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"})
            response.write('<html><body><table border=1px solid black>')
            
            response.write('<caption>회원 전체 검색</caption>')
            response.write('<tr><th>아이디</th><th>비밀번호</th><th>닉네임</th></tr>');
            
            for (let i = 0; i < rows.length; i++) {
                response.write(`<tr><td>${rows[i].id}</td>`)
                response.write(`<td>${rows[i].pw}</td>`)
                response.write(`<td>${rows[i].nick}</td></tr>`)
            }
            response.write('</table></body></html>')

            response.end()
            

        }else {
            console.log('검색 실패!')
        }
    });

    
})


// 특정 회원 검색 
router.post("/selectOne",function(request,response){
    console.log('selectOne 라우터');

    let id = request.body.id;
    let sql = "select * from nodejs_member where id = ?";
    conn.query(sql,[id],function(err, rows){
        if(rows){
            console.log('조회 성공');
            response.writeHead(200,{"Content-Type" : "text/html;charset=utf-8"})
            response.write('<html><body><table border=1px solid black>')
            
            response.write('<caption>특정 회원 검색</caption>')
            response.write('<tr><th>아이디</th><th>비밀번호</th><th>닉네임</th></tr>');
            
            for (let i = 0; i < rows.length; i++) {
                response.write(`<tr><td>${rows[i].id}</td>`)
                response.write(`<td>${rows[i].pw}</td>`)
                response.write(`<td>${rows[i].nick}</td></tr>`)
            }
            response.write('</table></body></html>')

            response.end()
        }else {
            console.log('조회 실패!')
        }
    });

    
})



module.exports = router;
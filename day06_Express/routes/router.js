const express = require('express');
const router = express.Router();

// mysql 프로그램을 가져오는게 아니라 프로그램과 연결할 수 있는 Mysql 모듈을 가지고 오는 작업 
const mysql = require('mysql');

router.post("/login",function(request,response){
    let id = request.body.id;
    let pw = request.body.pw;

    // 사용자가 입력한 ID가 smart 고, pw가 1234라면 'loginS.html' 페이지로 이동 
    // 그게 아니라면 LoginF.html 페이지로 이동하시오

    if(id == 'smart' && pw == '1234'){
        response.redirect('http://127.0.0.1:5500/day06_Express/views/LoginS.html');
    } else {
        response.redirect('http://127.0.0.1:5500/day06_Express/views/LoginF.html');
    }

    response.end();

    
})


router.post("/join",function(request,response){
    console.log('join 라우터');

    let id = request.body.id;
    let pw = request.body.pw;
    let nick = request.body.nick;

    // mysql 연결
    let conn = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '1234',
        port : '3306',
        database : 'nodejs'
    })

    conn.connect();

    let sql = "insert into nodejs_member values (?,?,?)";
    conn.query(sql,[id,pw,nick],function(err, rows){
        // 1) sql이 실행 되면 2) 테이블 가서 입력을 함! => 명령이 성공하든 실패하든 function으로 들어옴! 
        // 3) 에러가 난다면 에러라는 변수에, 성공했다면 rows라는 변수에 뭔가가 들어가게 됨 
        if(rows){
            // rows값이 true면? 즉 명령이 성공했다면? 
            console.log('입력 성공!')
            console.log(rows);
        }else {
            console.log('입력 실패!');
            console.log(err);
        }
    });

    response.end();

    
})


module.exports = router;

// mysql 프로그램을 가져오는게 아니라 프로그램과 연결할 수 있는 Mysql 모듈을 가지고 오는 작업 
const mysql = require('mysql');

    // mysql 연결
    let conn = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '1234',
        port : '3306',
        database : 'nodejs'
    })

    conn.connect();

    module.exports = conn;
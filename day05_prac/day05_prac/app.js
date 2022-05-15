// ** 1. Express 프레임워크를 활용한 서버 

// ** (1) express기능을 가져오는 코드 
const express = require("express");

// ** (2) express 기능을 실행하는 코드 
// -> 3 Port 
const app = express();

//  ** (4) express 기능 중에서 router 기능을 가져오는 코드 
// const router = express.Router(); 
const router = require('./routes/router');

// post 방식 
// bodyParser 가져오고 사용하기 (이해할 필요 없음!)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

app.use(router);

app.listen(3000);
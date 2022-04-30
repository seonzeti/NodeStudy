const express = require('express');
const app = express();
const router = require('./routes/router');

const bodyParser = require('body-parser');


// 자체적으로 가지고 있는 분석 기법이 아닌, 보편적으로 사용하는 분석 기법을 사용하겠다.
app.use(bodyParser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);
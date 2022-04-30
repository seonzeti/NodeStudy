// 응답하는 코드를 함수로 만들어서 분리시키는 작업

// 외부에서 사용할 수 있도록 모듈화 시켜줌
exports.grade_ = function(post){
    
    console.log('Template모듈에 있는 grade_ 함수 호출 성공!')
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
                grade = 'B';
            }else if(avg >= 75){
                grade = 'C+';
            }else {
                grade = 'F';
            }

    let res_temp = `<html>
                   <body>
                   NAME : ${post.name} <br>
                   HTML : ${score_html} <br>
                   CSS : ${score_css} <br>
                   Node.js : ${score_nodejs} <br>
                   ANDROID : ${score_android} <br>
                   AVG : ${avg} <br>
                   GRADE : ${grade}
                   </body></html>`;
                    // template literal : 여러줄로 이루어진 응답하는 코드를 쉽게 표현또는 치환할 수 있는 기능
                    // $ {변수} >> template literal에서 변수를 표기하기 위한 방식 (표현식방법)

    return res_temp;
}

exports. plus = function(query){

    console.log('Template모듈에 있는 plus 함수 호출 성공!');
    let num_1 = parseInt(query.num_1);
    let num_2 = parseInt(query.num_2);
    let op = query.cal;
    let op_str = ""
    let result = 0

    if(op == '+'){
        result = num_1 + num_2;
        op_str = '덧셈';
    }else if(op == '-'){
        result = num_1 - num_2;
        op_str = '뺄셈';
    }else if(op == '*'){
        result = num_1 * num_2;
        op_str = '곱셈';
    }else{
        result = num_1 / num_2;
        op_str = '나눗셈';
    }

    let res_temp =`<html><body>
                  사용자가 입력한 첫번째 값 : ${num_1} <br>
                  사용자가 입력한 두번째 값 : ${num_2} <br>
                  사용자가 입력한 두 숫자의 ${op_str} 결과 : ${result}
                  </body></html>` ;
    
    return res_temp ;

}

exports.join = function(post){

    let res_temp = `<html><body>
                   ID : ${post.nm_id} <br> 
                   NAME : ${post.nm_nm} <br> 
                   E-MAIL : ${post.nm_email} <br> 
                   TEL : ${post.nm_tel} <br> 
                   GENDER : ${post.gender_btn} <br> 
                   COUNTRY : ${post.nm_country} <br> 
                   BIRTH : ${post.nm_birth} <br> 
                   COLOR : ${post.nm_color} <br> 
                   HOBBY : ${post.nm_hobby} <br> 
                   TALK : ${post.nm_txt}  
                   </body></html>` ;

    return res_temp ;

}
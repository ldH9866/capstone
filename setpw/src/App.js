

import './App.css';
import React,{Component}from 'react';
// import "bootstrap/dist/css/bootstrap.min.css"


function App(){

    return(

        <form class="change_pw" action="">
            
            <h1>비밀번호 변경</h1>

            <ul>
          <li> 아이디</li>
             <li> <input type="text" placeholder="아이디를 입력하세요." id="useID"/>
              <button class="btn-id" onClick="">아이디 확인</button>
        </li>


          <li> 비밀번호 </li>
          <li> <input id='password' type='password'placeholder='비밀번호를 입력하세요'/></li>

          <li>비밀번호 확인 </li>
          <li> <input id='password-check' type='password'placeholder='비밀번호를 입력하세요'/></li>
                </ul>

            
                 <button class="btn" onClick="">변경하기</button>

                
                 

            </form>
            
        

    );

}


export default App;
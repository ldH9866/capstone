import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    
    <form id="potal">
            
             <h1>재학생 포탈 로그인</h1>
             
                <div class="potal_page">

               <div class="potal_login">
                <input id='name' name='name' type='text' placeholder='아이디를 입력하세요'/>
                <div class="clear"></div>
                
                <input id='password' name='password' type='password'placeholder='비밀번호를 입력하세요'/>
               </div>

               <input type="submit" value="LOGIN"/>

               <div class="clear"></div>

               <div class="link">                   
                <label><input type="button" value="아이디/비밀번호 찾기"/></label>
                <label><input type="button" value="회원가입"/></label>                 
               </div>

                </div>
            
            
        </form>
  );
}

export default App;

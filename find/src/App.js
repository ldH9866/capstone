
import './App.css';

function App() {
  return (


    <ul>

    <form class="find-id" action="POST">

      <h1>아이디 찾기</h1>

         <li>이름</li>
         <li><input id='userID'type='text' placeholder='이름을 입력하세요'/></li>
         
         <li>휴대전화</li>
         <li><input id='phone' name='phone' type='tel' placeholder='전화번호를 입력하세요'/>

         <button  class='ID_check_btn' type="submit">인증번호 받기</button>
         </li>
        
         <li><input id='name'type='text' placeholder='인증번호를 입력하세요'/></li>

         <button type="submit">보내기</button>
        
        </form>

      <form class="find-pw" action="POST">
        
          <h1>비밀번호 찾기</h1>

        <li>비밀번호</li>
        <li><input id='password' type='password'placeholder='비밀번호를 입력하세요'/></li>

        <li>이메일</li>
        <li><input id='email' type='email' placeholder='이메일을 입력하세요'/></li>
      
        <button id="pw_btn" type="submit">보내기</button>
        
        </form>

      </ul>

  );
}

export default App;

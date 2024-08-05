//회원가입 페이지
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트

const SignupPage = () => {
  // 상태 변수 선언
  const [userid, setUserid] = useState('');        // 사용자 ID 상태
  const [password, setPassword] = useState('');    // 비밀번호 상태
  const [username, setUsername] = useState('');    // 이름 상태
  const [userphone, setUserphone] = useState('');  // 전화번호 상태
  const [usernikname, setUsernikname] = useState(''); // 닉네임 상태
  const [useremail, setUseremail] = useState('');  // 이메일 상태

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지

    const postData = {
      userid,        // 사용자 ID
      password,      // 비밀번호
      username,      // 이름
      userphone,     // 전화번호
      usernikname,   // 닉네임
      useremail      // 이메일
    };

    // 서버에 데이터 제출
    fetch('https://example.com/api/signup', {
      method: 'POST',           // POST 메서드 사용
      headers: {
        'Content-Type': 'application/json', // 요청 본문이 JSON 형식임을 서버에 알림
      },
      body: JSON.stringify(postData), // 객체를 JSON 문자열로 변환하여 요청 본문에 포함
    })
    .then(response => response.json()) // 서버 응답을 JSON 형식으로 파싱
    .then(data => {
      console.log('Success:', data); // 성공 시 서버의 응답 데이터를 콘솔에 출력
      // 성공 후 작업 (예: 성공 메시지 표시, 입력 필드 초기화 등)
    })
    .catch((error) => {
      console.error('Error:', error); // 에러 발생 시 오류 메시지를 콘솔에 출력
      // 에러 처리 (예: 사용자에게 에러 메시지 표시)
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">회원가입</h1> {/* 페이지 제목을 큰 헤딩으로 표시하고, 아래 여백을 추가합니다. */}

      <form onSubmit={handleSubmit} autoComplete="off"> {/* 폼 제출 시 handleSubmit 함수 호출, 자동 완성 비활성화 */}
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">사용자 ID:</label>
          <input
            type="text"
            id="userid"
            className="form-control"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            required
            autoComplete="off" // 자동 완성 비활성화
            name="userid" // 고유한 name 속성으로 브라우저 자동 완성 방지
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">비밀번호:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off" // 자동 완성 비활성화
            name="password" // 고유한 name 속성으로 브라우저 자동 완성 방지
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">이름:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off" // 자동 완성 비활성화
            name="username" // 고유한 name 속성으로 브라우저 자동 완성 방지
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userphone" className="form-label">전화번호:</label>
          <input
            type="text"
            id="userphone"
            className="form-control"
            value={userphone}
            onChange={(e) => setUserphone(e.target.value)}
            required
            autoComplete="off" // 자동 완성 비활성화
            name="userphone" // 고유한 name 속성으로 브라우저 자동 완성 방지
          />
        </div>
        <div className="mb-3">
          <label htmlFor="usernikname" className="form-label">닉네임:</label>
          <input
            type="text"
            id="usernikname"
            className="form-control"
            value={usernikname}
            onChange={(e) => setUsernikname(e.target.value)}
            required
            autoComplete="off" // 자동 완성 비활성화
            name="usernikname" // 고유한 name 속성으로 브라우저 자동 완성 방지
          />
        </div>
        <div className="mb-3">
          <label htmlFor="useremail" className="form-label">이메일:</label>
          <input
            type="email"
            id="useremail"
            className="form-control"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
            required
            autoComplete="off" // 자동 완성 비활성화
            name="useremail" // 고유한 name 속성으로 브라우저 자동 완성 방지
          />
        </div>
        <button type="submit" className="btn btn-primary">회원가입</button> {/* 폼 제출 버튼 */}
      </form>
    </div>
  );
};

export default SignupPage;

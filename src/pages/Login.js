//로그인 페이지
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트
import { Link } from 'react-router-dom'; // Link 컴포넌트 임포트

const LoginPage = () => {
  // 상태 변수 선언
  const [userid, setUserid] = useState('');        // 사용자 ID 상태
  const [password, setPassword] = useState('');    // 비밀번호 상태

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지

    const postData = {
      userid,        // 사용자 ID
      password       // 비밀번호
    };

    // 서버에 데이터 제출
    fetch('https://example.com/api/login', {
      method: 'POST',           // POST 메서드 사용
      headers: {
        'Content-Type': 'application/json', // 요청 본문이 JSON 형식임을 서버에 알림
      },
      body: JSON.stringify(postData), // 객체를 JSON 문자열로 변환하여 요청 본문에 포함
    })
    .then(response => response.json()) // 서버 응답을 JSON 형식으로 파싱
    .then(data => {
      console.log('Success:', data); // 성공 시 서버의 응답 데이터를 콘솔에 출력
      // 성공 후 작업 (예: 성공 메시지 표시, 로그인 상태 유지 등)
    })
    .catch((error) => {
      console.error('Error:', error); // 에러 발생 시 오류 메시지를 콘솔에 출력
      // 에러 처리 (예: 사용자에게 에러 메시지 표시)
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">로그인</h1> {/* 페이지 제목을 큰 헤딩으로 표시하고, 아래 여백을 추가합니다. */}

      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">로그인</button> {/* 폼 제출 버튼 */}
      </form>
      
      <div className="mt-3">
        <p>회원가입이 아직 없으신가요?</p>
        <Link to="/signup" className="btn btn-secondary">회원가입</Link> {/* 회원가입 페이지로 이동하는 버튼 */}
      </div>
    </div>
  );
};

export default LoginPage;

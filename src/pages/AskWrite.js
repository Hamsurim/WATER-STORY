//문의하기 글 작성 페이지 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트

const AskWritePage = () => {
  const [askTitle, setTitle] = useState(''); // 제목 상태
  const [askDate, setDate] = useState(''); // 날짜 상태
  const [askContent, setContent] = useState(''); // 내용 상태

  useEffect(() => {
    // 작성 날짜를 오늘 날짜로 설정
    const askToday = new Date();
    const askFormattedDate = askToday.toISOString().split('T')[0];
    setDate(askFormattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지

    const askPostData = { // 제출할 데이터 객체
      title: askTitle, // 제목
      create_at: askDate, // 날짜
      post_content: askContent // 내용
    };

    fetch('https://example.com/api/inquiries', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // 요청 본문이 json 형식이라는걸 서버에 알리는 코드
      },
      body: JSON.stringify(askPostData), // 데이터 객체를 JSON으로 변환
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data); // 성공 시 콘솔에 출력
    })
    .catch((error) => {
      console.error('Error:', error); // 실패 시 오류 출력
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">문의하기 글 작성하는 페이지 입니다</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={askTitle}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">날짜</label>
          <input
            type="text"
            id="date"
            className="form-control"
            value={askDate}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            className="form-control"
            value={askContent}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">제출</button>
      </form>
    </div>
  );
};

export default AskWritePage;

// 글 작성하는 페이지 입니다. 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 css 임포트 한겁니다. 

const WritePage = () => { //ustState 훅 사용해서 제목, 날짜, 내용 관리합니다. 
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => { //create_at(작성날짜)가 오늘 날짜로 자동 설정해주는 코드입니다. 
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setDate(formattedDate);
  }, []);

  const handleSubmit = (e) => { // 폼이 제출될때 호출되는 함수입니다. 
    e.preventDefault();

    const postData = { // 제출할 데이터를 객체로 구성한 코드입니다. 
      title, // 제목
      create_at: date, // 날짜
      post_content: content // 게시글 본문
    };

    fetch('https://example.com/api/posts', { // DB랑 연결된 API 엔드포인드 입니다
      method: 'POST', // post 사용한 이유가 서버에 새로운 데이터를 생성, 제출할때 사용한데서 post 썻어요
      headers: {
        'Content-Type': 'application/json', // 요청 본문이 json 형식이라는걸 서버에 알리는 코드
      },
      body: JSON.stringify(postData), //postDate는 title,create_at,post_content 속성을 포함하는 객체에요
    })
    .then(response => response.json()) // 서버로 받은 응답을 json 형식으로 파싱하는 코드
    .then(data => {
      console.log('Success:', data); // 요청 성공되면 서버의 응답 데이터를 콘솔에 출력하는 코드입니다.
    })
    .catch((error) => {
      console.error('Error:', error); // 이건 실패하면 오류 메시지 콘솔에 출력하는 코드구요 
    });
  };



  // 여기부터는 게시물 작성하는 컴포넌트 구조 코드 입니다 

  return (
    <div className="container mt-5">
      <h1 className="mb-4">글 작성하는 페이지 입니다</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text" // 텍스트를 입력하는 필드 입니다. 
            id="title" // 입력한 필드의 고유 식별자 입니다. 
            className="form-control" 
            value={title} // 입력한 필드의 값은 제목 상태의 의해 관리 되는 겁니다. 
            onChange={(e) => setTitle(e.target.value)} //입력 필드의 값이 변경될때 호출되는 이벤트 핸들러입니다. 
            required // 작성안하면 못넘어가게 필수 입력 필드로 설정한 코드에요
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">날짜</label>
          <input
            type="text"
            id="date"
            className="form-control"
            value={date}
            readOnly // 읽기 전용으로 설정해서 사용자가 날짜 못바꾸게 설정한거에요 
                     // create_at(작성일자)를 수정하지 못하게 한 셈 
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required //작성안하면 못넘어가게 필수 입력 필드로 설정한 코드에요 
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default WritePage;
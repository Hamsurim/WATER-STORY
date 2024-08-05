//문의하기 목록페이지 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 임포트
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 컴포넌트 임포트

const AskThread = () => {
  const [posts, setPosts] = useState([]); // 게시물 목록을 저장할 상태 변수

  useEffect(() => {
    // 컴포넌트가 마운트될 때 게시물 목록을 가져옵니다.
    fetch('https://example.com/api/inquiries') // API에서 문의사항 목록을 가져옵니다.
      .then(response => response.json()) // 응답을 JSON 형식으로 변환
      .then(data => setPosts(data)) // 변환된 데이터를 상태 변수에 저장
      .catch(error => console.error('Error:', error)); // 오류가 발생하면 콘솔에 출력
  }, []); // 빈 배열을 의존성 배열로 전달하여 컴포넌트가 마운트될 때만 useEffect가 실행됩니다.

  return (
    <div className="container mt-5">
      <h1 className="mb-4">문의하기 목록</h1> {/* 페이지 제목을 큰 헤딩으로 표시하고, 아래 여백을 추가합니다. */}
      <Link to="/ask/write" className="btn btn-primary mb-3">글 작성하기</Link> {/* 글 작성 페이지로 이동하는 버튼 */}
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <Link to={`/ask/post/${post.id}`}>{post.title}</Link> {/* 각 게시물 제목을 링크로 설정하여 클릭 시 해당 게시물의 상세 페이지로 이동합니다. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AskThread;

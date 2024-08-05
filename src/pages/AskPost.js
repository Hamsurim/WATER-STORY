//문의하기 상세페이지 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트
import { useParams } from 'react-router-dom'; // react-router-dom에서 useParams 훅 임포트

const AskPost = () => {
  const { id } = useParams(); // URL에서 게시물 ID 가져오기
  const [post, setPost] = useState(null); // 게시물 데이터를 저장할 상태 변수

  useEffect(() => {
    // 컴포넌트가 마운트될 때 게시물 데이터를 가져옵니다.
    fetch(`https://example.com/api/inquiries/${id}`) // API 호출을 통해 특정 게시물의 정보를 가져옵니다.  
    .then(response => response.json()) // 응답을 JSON 형식으로 변환
      .then(data => setPost(data)) // 변환된 데이터를 상태 변수에 저장
      .catch(error => console.error('Error:', error)); // 오류가 발생하면 콘솔에 출력
  }, [id]); // ID가 변경될 때마다 useEffect가 호출되어 새로운 게시물 정보를 가져옵니다.

  if (!post) return <div>Loading...</div>; // 게시물이 로딩 중일 때 표시할 메시지

  // 게시물 데이터가 로드된 후 제목, 작성일자, 내용을 표시
  return (
    <div className="container mt-5">
      <h1 className="mb-4">{post.title}</h1>
      <p><strong>작성일자:</strong> {post.create_at}</p>
      <div>{post.post_content}</div>
    </div>
  );
};

export default AskPost;

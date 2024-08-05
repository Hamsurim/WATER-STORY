// 작성한 게시글의 목록을 보여주는 스레드 페이지입니다.
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 임포트하여 스타일을 적용합니다.
import { Link } from 'react-router-dom'; // react-router-dom 패키지에서 Link 컴포넌트를 임포트하여 링크를 생성합니다.

const PostsListPage = () => {
  // 게시물 목록을 저장할 상태 변수를 선언합니다.
  const [posts, setPosts] = useState([]);

  // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 게시물 목록을 가져옵니다.
  useEffect(() => {
    // fetch를 사용하여 API에서 게시물 목록을 가져옵니다.
    fetch('https://example.com/api/posts')
      .then(response => response.json()) // 응답을 JSON 형식으로 변환합니다.
      .then(data => setPosts(data)) // 변환된 데이터를 상태 변수에 저장합니다.
      .catch(error => console.error('Error:', error)); // 데이터 가져오기 과정에서 오류가 발생하면 콘솔에 출력합니다.
  }, []); // 빈 배열을 의존성 배열로 전달하여 컴포넌트가 마운트될 때만 useEffect가 실행됩니다.

  return (
    <div className="container mt-5"> 
      <h1 className="mb-4">게시글 목록</h1> {/* 페이지 제목을 큰 헤딩으로 표시하고, 아래 여백을 추가합니다. */}
      <Link to="/write" className="btn btn-primary mb-3">글 작성하기</Link> {/* 글 작성 페이지로 이동하는 버튼을 추가합니다. */}
      <ul className="list-group"> 
        {posts.map(post => (
          <li key={post.id} className="list-group-item"> 
            <Link to={`/posts/${post.id}`}>{post.title}</Link> {/* 각 게시물 제목을 링크로 설정하고, 클릭 시 해당 게시물의 상세 페이지로 이동합니다. */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsListPage; 
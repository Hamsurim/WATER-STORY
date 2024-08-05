// 작성한 페이지의 정보를 보여주는 페이지 입니다. 
// 게시물의 ID 값을 URL에서 가져와 해당 게시물의 정보를 표시합니다. 
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 css 임포트 한겁니다. 
import { useParams } from 'react-router-dom'; // react-router-dom 패키지에서 useParams 임포트

const PostDetailPage = () => {
    
  const { id } = useParams(); // URL에서 게시물 ID 가져오기
                              //useParams 훅을 사용해서 url에서 게시물의 id 값을 가져옵니다. 
                              //DB에 게시물 id값을 따로 추가하여야 할것 같아요 

  const [post, setPost] = useState(null); // 게시물 데이터를 저장할 상태 변수를 선언합니다. 

    
  useEffect(() => { // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 게시물 데이터를 가져옵니다.


    fetch(`https://example.com/api/posts/${id}`)
// 특정 게시물의 정보를 가져오는 API 호출하는 코드인데 ${id}가 해당 페이지의 id 값을 가져오는 url입니다.
// id 값은 동적으로 바뀝니다. useParams 훅을 써서요
// 예를 들면 url이 /post/123 이라면 useParams는 {id :'123'}을 반환하는 형식입니다. 
// API 호출로 서버에서 해당 ID의 게시물 정보를 받아오잖아요? 
// 만약 url이 /post/777 이라면 'https://형의 api 주소/post/777에 대한 요청이 이뤄지는 겁니다. 
// 이 페이지는 특정(사용자가 클릭한) 페이지의 정보 (제목, 본문 , 작성일자)를 보여주는 페이지이니까요  

      .then(response => response.json()) // 응답을 JSON 형식으로 변환합니다.
      .then(data => setPost(data)) // 변환된 데이터를 상태 변수에 저장합니다.
      .catch(error => console.error('Error:', error)); // 데이터 가져오기 과정에서 오류가 발생하면 콘솔에 출력합니다.
  }, [id]);//id 가 변경될때마다 useEffct가 호출되어서 새로운 게시물 정보를 가져옵니다. 


  if (!post) return <div>Loading...</div>; // 게시물이 아직 로딩 중일 때 표시할 메시지

// 게시물 데이터가 로드 되면 제목(title), 작성일자(create_at) , 내용(post_content)를 표시합니다. 
  return (
    <div className="container mt-5">
      <h1 className="mb-4">{post.title}</h1>
      <p><strong>작성일자:</strong> {post.create_at}</p>
      <div>{post.post_content}</div>
    </div>
  );
};

export default PostDetailPage;
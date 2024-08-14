// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar'; // 네비게이션 바 컴포넌트 import
import WritePage from './pages/Write';
import PostsListPage from './pages/Thread';
import PostDetailPage from './pages/Post';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import AskWritePage from './pages/AskWrite';
import AskPost from './pages/AskPost';
import AskThread from './pages/AskThread';
import ShopMap from './pages/Map';

const App = () => {
  return (
  
    <Router>
      <div>
        <NavigationBar /> {/* 네비게이션 바 컴포넌트 추가 */}
        <Routes>
          <Route path="/thread" element={<PostsListPage />} /> {/* 게시물 목록 페이지 */}
          <Route path="/write" element={<WritePage />} /> {/* 글 작성 페이지 */}
          <Route path="/posts/:id" element={<PostDetailPage />} /> {/* 게시물 상세 페이지 */}

          <Route path="/signup" element={<SignupPage />} /> {/* 회원가입 페이지 */}
          <Route path="/login" element={<LoginPage />} /> {/* 로그인 페이지 */}

          <Route path="/ask" element={<AskThread />} /> {/* 문의하기 게시물 목록 페이지 */}
          <Route path="/ask/write" element={<AskWritePage />} /> {/* 문의하기 글 작성 페이지*/}
          <Route path="/ask/post/:id" element={<AskPost />} />{/* 문의하기 상세 페이지*/}
       
          <Route path="/map" element={<ShopMap />} />{/* 지도 상세 페이지*/}
       
        </Routes>
      </div>
    </Router>
  );
};

export default App;

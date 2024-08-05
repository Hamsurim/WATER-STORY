// 네비게이션 바 페이지 
// 카테고리 페이지라고 생각하심 됩니다 ~~
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">메인화면</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/thread">게시글</Nav.Link>
          <Nav.Link as={Link} to="/ask">문의하기</Nav.Link> {/* 문의하기 페이지 링크 추가 */}
          <Nav.Link as={Link} to="/login">로그인</Nav.Link> {/* 로그인 페이지 링크 추가 */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

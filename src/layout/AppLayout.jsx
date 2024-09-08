import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container className='w-[80%]'>
          <Navbar.Brand href='/'>
            <img src='/logo.png' alt='Logo' className='h-10 w-auto' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/diary'>일정관리</Nav.Link>{' '}
              <Nav.Link href='/medicine'>약찾기</Nav.Link>
              <Nav.Link href='/hospital'>병원/약국</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;

import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Header;
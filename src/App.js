import {Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">다사와</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">카테고리1</Nav.Link>
            <Nav.Link href="#features">카테고리2</Nav.Link>
            <Nav.Link href="#pricing">카테고리3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;

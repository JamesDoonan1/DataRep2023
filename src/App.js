import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sell from './components/sell';
import PianoDetails from './components/PianoDetails'; // Updated import
import Edit from './components/editPiano';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="success" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Jimmy's Piano</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/sell">Sell Piano</Nav.Link>
                <Nav.Link href="/PianoDetails">Piano Details</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/sell' element={<Sell />} />
            <Route path='/PianoDetails' element={<PianoDetails />} /> {/* Updated component */}
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

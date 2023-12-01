import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sell from './components/sell';
import PianoDetails from './components/PianoDetails';
import Edit from './components/editPiano';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="danger" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sell">Sell Piano</Nav.Link>
              <Nav.Link href="/PianoDetails">Piano Details</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
         <Route path='/sell' element={<Sell></Sell>}></Route> 
         <Route path='/PianoDetails' element={<PianoDetails></PianoDetails>}></Route>
         <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

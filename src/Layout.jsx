import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const Layout=()=>{
    return(
        <>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="home" >Home</Nav.Link>
            <Nav.Link  as={Link} to="display" >Display</Nav.Link>
            <Nav.Link  as={Link} to="insert" >Insert</Nav.Link>
            <Nav.Link  as={Link} to="search" >Search</Nav.Link>
            <Nav.Link  as={Link} to="Delete" >Delete</Nav.Link>
            <Nav.Link  as={Link} to="Edit" >Edit</Nav.Link>
          </Nav>

          
        </Container>
      </Navbar>
      <Outlet/>
        </>
    )
}

export default Layout;
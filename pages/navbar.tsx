import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavbarMenu() {
    return (
<Navbar bg="primary" variant="dark">
      <div className="d-flex align-items-center">
        <Navbar.Brand href="#">
          <b> STMIK JAYAKARTA </b>
        </Navbar.Brand>
        <Nav className="mr-auto" fill variant="tabs">
          <Nav.Link href="#"><b>Home</b></Nav.Link>
          <Nav.Link href="/mahasiswa"><b>Menu</b></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="nav-dropdown" >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>  */}
          <Nav.Link href="#"><b>Contact</b></Nav.Link>
        </Nav>
      </div>
    </Navbar>

)
}
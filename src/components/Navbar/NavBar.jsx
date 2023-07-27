import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export function NavBar({ setCurrentWebsitePath, homePageRef }) {
  const expand = "sm";
  const navItems = [
    { to: "/", content: "Home" },
    { to: "/projects", content: "Projects" },
    { to: "/about", content: "About" },
  ];
  return (
    <Navbar
      expand={expand}
      className="bg-transparent"
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {navItems.map(({ to, content }, index) => {
                return (
                  <Nav.Link
                    key={"main-nav-link-" + index}
                    as={Link}
                    href={to}
                    onClick={() => {
                      setCurrentWebsitePath(to);
                    }}
                    to={to}
                    ref={to === "/" ? homePageRef : null}
                  >
                    {content}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

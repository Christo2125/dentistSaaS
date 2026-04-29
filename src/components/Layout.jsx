import { Outlet, Link, NavLink } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar bg="white" expand="lg" sticky="top" className="navbar py-3">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold text-primary d-flex align-items-center"
          >
            <span style={{ fontSize: "1.5rem", marginRight: "8px" }}></span>
            <span style={{ fontSize: "1.4rem" }}>DentalDash</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/features" className="fw-medium mx-2">
                Features
              </Nav.Link>
              <Nav.Link as={NavLink} to="/solutions" className="fw-medium mx-2">
                Solutions
              </Nav.Link>
              <Nav.Link as={NavLink} to="/pricing" className="fw-medium mx-2">
                Pricing
              </Nav.Link>
              <Nav.Link as={NavLink} to="/resources" className="fw-medium mx-2">
                Resources
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Button as={Link} to="/pricing" variant="primary">
                Book Demo
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="bg-white py-5 mt-auto border-top">
        <Container>
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="fw-bold text-primary mb-3 d-flex align-items-center">
                <span style={{ marginRight: "8px" }}></span> DentalDash
              </h5>
              <p className="text-muted-foreground w-75 pe-3">
                Run your entire dental clinic on one powerful platform.
                Appointments, billing, and analytics in one place.
              </p>
            </div>
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-3">Product</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/features"
                    className="text-muted-foreground text-decoration-none"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/solutions"
                    className="text-muted-foreground text-decoration-none"
                  >
                    Solutions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/pricing"
                    className="text-muted-foreground text-decoration-none"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/integrations"
                    className="text-muted-foreground text-decoration-none"
                  >
                    Integrations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/security"
                    className="text-muted-foreground text-decoration-none"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/about"
                    className="text-muted-foreground text-decoration-none"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/pricing"
                    className="text-muted-foreground text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-top mt-5 pt-4 text-center text-muted-foreground">
            <small>
              &copy; {new Date().getFullYear()} DentalDash. All rights reserved.
            </small>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;

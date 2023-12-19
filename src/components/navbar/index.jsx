import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import Search from "../../pages/search/index.jsx";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  const currentUser = useSelector((state) => state.currentUser.data);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          {currentUser.name}
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/users" className="nav-link">
              Users
            </Link>
            <Link to="/tags" className="nav-link">
              Tags
            </Link>
            <Link
              to={`/user/${currentUser.id}/followers`}
              className="nav-link"
            >
              Followers
            </Link>
            <Link to={`/users/${currentUser.id}/reports`} className="nav-link">
              Reports
            </Link>
            <NavDropdown title="Followings" id="navbarScrollingDropdown">
              <NavDropdown.Item
                as={Link}
                to={`/user/${currentUser.id}/followings`}
                className="dropdown-item"
              >
                Users
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/user/${currentUser.id}/tags`}
                className="dropdown-item"
              >
                Tags
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to={`/user/${currentUser.id}/followings/qoutes`}
                className="dropdown-item"
              >
                Quotes of Users
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={`/user/${currentUser.id}/tags/qoutes`}
                className="dropdown-item"
              >
                Quotes of Tags
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">{/* <Search /> */}</Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

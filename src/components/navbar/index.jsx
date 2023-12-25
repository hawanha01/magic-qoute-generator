import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profile_picture from "../../assets/profile_picture/profile_picture.jpg";
import { CurrentUserResetCurrentUser } from "../../actions/currentUserActions.js";

const MyNavBar = () => {
  const currentUser = useSelector((state) => state.currentUser.data);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/dashboard" className="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/users" className="nav-link">
              Users
            </Link>
            <Link to="/tags" className="nav-link">
              Tags
            </Link>
            <Link to={`/user/${currentUser.id}/followers`} className="nav-link">
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
          <Nav className="ml-auto my-2 my-lg-0">
            <Nav.Link as={Link} to={`/users/${currentUser.id}`}>
              <img
                src={profile_picture}
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                }}
                alt="profile"
              />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => dispatch(CurrentUserResetCurrentUser())}
            >
              Sign out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

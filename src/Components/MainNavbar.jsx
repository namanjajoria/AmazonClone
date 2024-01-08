import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../Images/amazonLogo.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link as ScrollLink } from "react-scroll";
// eslint-disable-next-line react/prop-types
const MainNavbar = ({setSearchTerm}) => {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
 
  return (

    <div>
         <Navbar expand="lg" className="bg-body-tertiary bg-dark ps-5 pe-5">
      <Container fluid>
      <Link to="/" className="text-light me-4">
            <img
              src={Logo}
              width={"150px"}
              height={"60px"}
              alt="Logo"
              className="image"
            ></img>
          </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={'/'} className=" fs-5 me-4 list navitem">Home</Link>
            <ScrollLink
              to="productsSection"  // This should match the target element's ID
              smooth={false}
              duration={500}
              className="me-4 fs-5 list navitem"
              style={{cursor:"pointer"}}
            >
              Products
            </ScrollLink>
            
          </Nav>
          <Form className="d-flex ms-auto me-auto navitem">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-success">
            Search
          </Button>
        </Form>

          <Link to="/cart" className="text-light fs-5 list me-auto ms-auto links">
            Cart
            <Badge badgeContent={cart.length}  color="primary" className="ms-2">
              <AddShoppingCartIcon className="text-light fs-3" color="action" />
            </Badge>
           
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
};

export default MainNavbar;

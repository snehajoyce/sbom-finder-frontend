import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function NavigationBar() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?name=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">SBOM Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/sboms">SBOMs</Nav.Link>
            <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
            <Nav.Link as={Link} to="/compare">Compare</Nav.Link>
            <Nav.Link as={Link} to="/statistics">Statistics</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search SBOMs"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-primary" type="submit">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
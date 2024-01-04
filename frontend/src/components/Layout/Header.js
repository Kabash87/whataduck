import { Button, Col, Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/duck-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";


function Header() {
  const { isLogged, setIsLogged } = useAuth();
  const navigate = useNavigate();


  const handleLogout = (req, res) => {
    //Se remove la informacion dentro del localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("isVerified");
    localStorage.removeItem("emailToken")
    setIsLogged(false);
    navigate("/");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };

    // Iniciar escuchando los cambios
    window.addEventListener("storage", handleStorageChange);

    // Llamar a la función una vez al inicio para establecer el estado inicial
    handleStorageChange();

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [setIsLogged]);


  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
          <h1 className="caveat-font">What a Duck!</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about-us">Quienes somos</Nav.Link>
            <Nav.Link href="/adverts">Anuncios</Nav.Link>
          </Nav>
          <Col xs="auto" className="ms-auto">
            {isLogged ? (
              <Button variant="secondary" onClick={handleLogout} style={{marginBottom: '5px'}}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">
                  Registrarte o Iniciar sesión
                </Button>
              </Link>
            )}
          </Col>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

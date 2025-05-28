import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import styles from "./NavBar.module.css";
import { AuthContext } from "../contexts/UserContext";
import { useContext } from "react";


const NavBar = () => {
   const { usuarioNome, logout } = useContext(AuthContext);

  return (
        // <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
    <Navbar sticky="top" expand="lg" className={`container-fluid py-2 px-3 ${styles.navbar_custom}`}
        style={{ 
        display: 'flex', 
        alignItems: 'center'
    }}
      > 

      <Container fluid className="mt-0 p-0 py-0" >
        <Navbar.Brand as={NavLink} to="/home">
        {/* adicionando icones aos menus             */}
        <img
              alt="SenaiLogo"
              src="/SenaiLogoBranco.png"
              // src="./logo_senai.svg"
              width="200"
              // height="30"
              className="d-inline-block align-top"
              />{' '}
        </Navbar.Brand>
        <Navbar.Toggle className={styles.text} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto bg text-end" >
            <Nav.Link as={NavLink} className={styles} 
            style={({ isActive }) => {
              return { color: isActive ?
                     'var(--clr-base)' : 
                     'var(--clr-text)',
                    transition: 'all 0.2s ease',
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    }
              }}
            to="/contatosite">
            Contato</Nav.Link>
            <Nav.Link as={NavLink} className={styles} 
            style={({ isActive }) => {
              return { color: isActive ?
                     'var(--clr-base)' : 
                     'var(--clr-text)',
                    transition: 'all 0.2s ease',
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    }
              }}
            to="/historia">
            História</Nav.Link>
            <Nav.Link as={NavLink} className={styles} 
            style={({ isActive }) => {
              return { color: isActive ?
                     'var(--clr-base)' : 
                     'var(--clr-text)',
                    transition: 'all 0.2s ease',
                    textDecoration: isActive ? 'underline' : 'none',
                    fontWeight: isActive ? '' : 'normal',
                    }
              }}
            to="/sobre">
            Sobre</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" >
          
            <Navbar.Text className={styles.text} >
             {usuarioNome === "Visitante" ? (
                <>
                  <span>Olá, </span>
                  <Link  as={NavLink} 
                          to="/login" 
                          className={styles.login}>Visitante</Link>
                </>
                ) : (
                <>
                  <span>Olá, </span>
                  <Link  as={NavLink} to="/login" 
                          onClick={logout} 
                          className={styles.text}>{usuarioNome}
                          <span className="m-0 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                          </span>
                  </Link>
                </>
              )}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            

  )
}

export default NavBar
import { useState, useContext } from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import { ThemeContext } from "../utils/ThemeContext";

const NavigationBar = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const showNavbar = () => {
    setNavbarCollapse(!navbarCollapse);
  };

  return (
    <Navbar className="darkTheme" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-white">{`<SO />`}</Navbar.Brand>
        {navbarCollapse ? (
          <AiOutlineClose onClick={showNavbar} className="menu d-lg-none" />
        ) : (
          <AiOutlineMenu onClick={showNavbar} className="menu d-lg-none" />
        )}

        <Nav
          className={`${
            navbarCollapse
              ? `mobileNavbar darkTheme `
              : `d-none d-lg-block desktopNavbar`
          }`}
        >
          <Nav.Link href="#about" className="d-lg-inline fontColor">
            About
          </Nav.Link>
          <Nav.Link href="#work" className="d-lg-inline fontColor">
            Work
          </Nav.Link>
          <Nav.Link href="#testimonials" className="d-lg-inline fontColor">
            Testimonials
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="d-lg-inline fontColor contact_link"
          >
            Contact
          </Nav.Link>
          <div className="d-lg-inline-block">
            <p className="fontColor d-lg-none d-inline-block switchTheme">
              Switch theme
            </p>
            {theme ? (
              <BsBrightnessHigh
                onClick={toggleTheme}
                className="menu moonIcon"
              />
            ) : (
              <BsMoonStars onClick={toggleTheme} className="menu moonIcon" />
            )}
          </div>
          <a
            href="https://drive.google.com/file/d/1wCCcavGLa9uGJh5v_xT5CpIOmmh-sAKk/view?usp=drive_link"
            download={true}
            className="mx-auto resumeLink"
          >
            <button
              className="d-lg-inline text-dark mx-auto resumeBtn"
            >
              Download CV
            </button>
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

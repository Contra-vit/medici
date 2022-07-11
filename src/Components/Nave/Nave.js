// import react from 'react';
import './Nave.css';
import { Link, animateScroll as scroll } from "react-scroll";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";
import { useContext } from "react";


function Nave() {

  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  return (
      <Navbar bg="light" expand="lg">
        <Container className='LangContainer'>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={locale === 'en' ? 'ms-auto' : 'me-auto'}>
              <div className='En' href="#" onClick={() => changeLocale('en')}>En/</div >
              <div className='Fr' href="#" onClick={() => changeLocale('fr')}>Fr</div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}



export default Nave;

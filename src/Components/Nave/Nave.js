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
              {/* <NavDropdown title={t('language')} id="basic-nav-dropdown"  className='EnRuHeader' > */}
                {/* <NavDropdown.Item  className='EnRu' href="#" onClick={() => changeLocale('en')}>En</NavDropdown.Item>
                <NavDropdown.Item  className='EnRu' href="#" onClick={() => changeLocale('ru')}>Ru</NavDropdown.Item> */}
              {/* </NavDropdown> */}
              <div> </div>
              <div className='En' href="#" onClick={() => changeLocale('en')}>En/</div >
              <div className='Ru' href="#" onClick={() => changeLocale('ru')}>Ru</div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}



export default Nave;

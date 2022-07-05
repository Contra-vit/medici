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
    // <div className="Nav">
    //   <ul>
    //     <a className="nav-world">
    //       <Link activeClass="active"
    //         to="company"
    //         spy={true}
    //         smooth={true}
    //         hashSpy={true}
    //         offset={10}
    //         duration={300}
    //         delay={500}
    //         isDynamic={true}
    //         onSetActive={this.handleSetActive}
    //         onSetInactive={this.handleSetInactive}
    //         ignoreCancelEvents={false}
    //         spyThrottle={500}
    //       >
    //         Company</Link>
    //     </a>

    //     <a className="nav-world">
    //       <Link activeClass="active"
    //         to="functional"
    //         spy={true}
    //         smooth={true}
    //         hashSpy={true}
    //         offset={50}
    //         duration={500}
    //         delay={500}
    //         isDynamic={true}
    //         onSetActive={this.handleSetActive}
    //         onSetInactive={this.handleSetInactive}
    //         ignoreCancelEvents={false}
    //         spyThrottle={500}
    //       >
    //         Functional</Link>
    //     </a>
    //     <a className="nav-world">
    //       <Link activeClass="active"
    //         to="teamWorkTogether"
    //         spy={true}
    //         smooth={true}
    //         hashSpy={true}
    //         offset={5}
    //         duration={500}
    //         delay={500}
    //         isDynamic={true}
    //         onSetActive={this.handleSetActive}
    //         onSetInactive={this.handleSetInactive}
    //         ignoreCancelEvents={false}
    //         spyThrottle={500}
    //       >
    //         Team</Link>
    //     </a>
    //     <a className="nav-world">
    //       <Link activeClass="active"
    //         to="ourClients"
    //         spy={true}
    //         smooth={true}
    //         hashSpy={true}
    //         offset={5}
    //         duration={500}
    //         delay={500}
    //         isDynamic={true}
    //         onSetActive={this.handleSetActive}
    //         onSetInactive={this.handleSetInactive}
    //         ignoreCancelEvents={false}
    //         spyThrottle={500}
    //       >
    //         Clients</Link>
    //     </a>


    //     <a className="nav-world">
    //       <Link activeClass="active"
    //         to="footer"
    //         spy={true}
    //         smooth={true}
    //         hashSpy={true}
    //         offset={50}
    //         duration={500}
    //         delay={500}
    //         isDynamic={true}
    //         onSetActive={this.handleSetActive}
    //         onSetInactive={this.handleSetInactive}
    //         ignoreCancelEvents={false}
    //         spyThrottle={500}
    //       >
    //         Contacts</Link>
    //     </a>


    //   </ul>
    // </div>


      <Navbar bg="light" expand="lg">
        <Container>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={locale === 'en' ? 'ms-auto' : 'me-auto'}>
              <NavDropdown title={t('language')} id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => changeLocale('ar')}>العربية</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}



export default Nave;

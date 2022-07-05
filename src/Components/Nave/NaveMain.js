import react from 'react';
import './NaveMain.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";


function NaveMain() {
    
    return (
      <div className="Nav">
        <ul>
          <a className="nav-world">
            <Link activeClass="active"
              to="company"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={10}
              duration={300}
              delay={500}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Company</Link>
          </a>

          <a className="nav-world">
            <Link activeClass="active"
              to="functional"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={500}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Functional</Link>
          </a>
          <a className="nav-world">
            <Link activeClass="active"
              to="teamWorkTogether"
              spy={true}
              smooth={true}
             hashSpy={true}
              offset={5}
              duration={500}
              delay={500}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Team</Link>
          </a>
          <a className="nav-world">
            <Link activeClass="active"
              to="ourClients"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={5}
              duration={500}
              delay={500}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Clients</Link>
          </a>
       

          <a className="nav-world">
            <Link activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={500}
              isDynamic={true}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              ignoreCancelEvents={false}
              spyThrottle={500}
            >
              Contacts</Link>
          </a>
          

        </ul>

      </div>
    )
  }



export default NaveMain;

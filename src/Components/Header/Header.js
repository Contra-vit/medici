import react from 'react';
// import Nave from '../src/Components/Nave/Nave';
import './Header.css';
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
    return (
      <header>
        <div className="header">
          <img src={process.env.PUBLIC_URL + "img/image_36.png"} className='header-logo' />
          <img src={process.env.PUBLIC_URL + "img/image_37.png"} className='header-main-picture' />
          <container className="header-container">
            <h1 className="header-name">{t('greeting')}</h1>
            <button className='buttonGetStarted'>Get started </button>

           
            <div className='figure'>
              <div className='dash-1'></div>
              <div className='dash-2'></div>
              <div className='line-hor'></div>
              <div className='line-vertic-1'></div>
              <div className='line-vertic-2'></div>
              <div className='semiSphere-1'></div>
              <div className='semiSphere-2'></div>
          
            <div className='Ellipse-17'></div>
            <div className='Ellipse-16'></div>
            <div className='Ellipse-15'></div>
            <div className='Ellipse-18'></div>
            <div className='Ellipse-12'></div>
            <div className='Ellipse-9'></div>
  </div>
          </container>
        </div>
        {/* <Nave /> */}
      </header>

    )
  }



export default Header;

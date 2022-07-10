import react from 'react';
// import Nave from '../src/Components/Nave/Nave';
import './Header.css';
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import React, { Suspense, useState } from 'react';

// const customStyles = {
//   content: {
//     font-family: 'Roboto',
//     font-style: 'normal',
//     font-weight: '700',
//     font-size: '48px',
//     line-height: '56px',
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     background:'#FFFFFF'
//   },
// };

Modal.setAppElement('#root');




function Header() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }





  const { t } = useTranslation();

  // const getStarted = () => {
  //   console.log('hi')
  // }

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
      document.head.appendChild(stylesheet);
    }

  }, []);

  return (
    <header>
      <div className="header">
        <img src={process.env.PUBLIC_URL + "img/image_36.png"} className='header-logo' />
        <img src={process.env.PUBLIC_URL + "img/image_37.png"} className='header-main-picture' />
        <container className="header-container">
          <h1 className="header-name">{t('header')}</h1>
          <button onClick={openModal} className='buttonGetStarted'>{t('getstarted')} </button>


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

      
        <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal className='modalStyle'
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 >Leave your contacts and we will contact you shortly</h1>

              <ContactForm />

        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> 
        <button onClick={closeModal} className='buttonModal' >close</button>
        <div>I am a modal</div>
       <form>
          <input />
          <button >tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>


      </div>
      {/* <ContactForm /> */}


    </header>

  )
}



export default Header;

import React, { Suspense, useState } from 'react';
import './App.css';
import Main from '../src/Components/Main/Main';
import Company from '../src/Components/Company/Company'
import Functional from '../src/Components/Functional/Functional'
import Team from '../src/Components/Team/Team'
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Footer/Footer';
import Nave from './Components/Nave/Nave';
import NaveMain from './Components/Nave/NaveMain';

import { Container, ThemeProvider } from 'react-bootstrap';
import Loading from './/Components/Loading';
import { Helmet } from 'react-helmet';
// import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from '../src/Components/Nave/i18n';
import LocaleContext from '../src/Components/Nave/LocaleContext';

// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';


// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// Modal.setAppElement('#root');





function App() {

  // let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  // function closeModal() {
  //   setIsOpen(false);
  // }



  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <div className='app'>
      <NaveMain />
       <LocaleContext.Provider value={{ locale, setLocale }}>
       {/* <Suspense fallback={<Loading />}> */}
          {/* <Helmet htmlAttributes={{
            lang: locale,
            dir: locale === 'en' ? 'ltr' : 'rtl'
          }} /> */}
          {/* <ThemeProvider dir={locale === 'en' ? 'ltr' : 'rtl'}> */}

            <Nave />
            <Main />
            <Footer />
            <Container />
          {/* </ThemeProvider>   */}
          {/* </Suspense> */}
      // </LocaleContext.Provider>

      {/* <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div> */}


    </div>

  )
}



export default App;

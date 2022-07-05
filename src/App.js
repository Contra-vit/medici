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
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './/Components/Loading';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from '../src/Components/Nave/i18n';
import LocaleContext from '../src/Components/Nave/LocaleContext';

function App() {

    const [locale, setLocale] = useState(i18n.language);

    i18n.on('languageChanged', (lng) => setLocale(i18n.language));
    return (
             <div className='app'>
      <NaveMain/>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<Loading />}>
          <Helmet htmlAttributes={{
            lang: locale,
            dir: locale === 'en' ? 'ltr' : 'rtl'
          }} />
          <ThemeProvider dir={locale === 'en' ? 'ltr' : 'rtl'}>
             
              <Nave />
              <Main />
              <Footer />
              <Container/>
          </ThemeProvider>
        </Suspense>
      </LocaleContext.Provider>
                </div>

    )
  }



export default App;

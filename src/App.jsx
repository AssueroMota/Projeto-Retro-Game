

import './app.css'
import '../sass/global.scss'

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Movies from './components/Movies/Movies';
import Photos from './components/Photos/Photos';
import Possibilities from './components/Possibilities/Possibilities';
import Location from './components/Location/Location';
import Commission from './components/Commission/Commission';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import 'animate.css';
import What from './components/WhatWeDo/What';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Description />
      <What/>
      {/* <Movies {...moviesTranslations} /> */}
      <Photos />
      {/* <Possibilities {...pTranslations} /> */}
      {/* <Location {...lTranslations} /> */}
      {/* <Commission {...cTranslations} /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App

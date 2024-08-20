

import './app.css'
import '../sass/global.scss'

import Header from './components/Header/Header.jsx';


import SectionOne from './components/SectionOne/SectionOne.jsx';
import SectionTwo from './components/SectionTwo/SectionTwo.jsx';
import SectionThree from './components/SectionThree/SectionThree.jsx';
import Rodape from './components/Rodape/Rodape.jsx';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Duração da animação
    });
  }, []);
  
  return (
    <>
      <Header />
      <SectionOne id="equipe" />
      <SectionTwo id="space" />
      <SectionThree />
      <Rodape />

    </>
  )
}

export default App

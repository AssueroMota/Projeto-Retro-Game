

import './app.css'
import '../sass/global.scss'

import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
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
      <Content />
      {/* <SectionOne id="equipe" />
      <SectionTwo id="space" />
      <SectionThree />
      <Rodape /> */}

    </>
  )
}

export default App

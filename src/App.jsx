

import './app.css'
import '../sass/global.scss'

import Header from './components/Header/Header.jsx';


import 'animate.css';
import SectionOne from './components/SectionOne/SectionOne.jsx';
import SectionTwo from './components/SectionTwo/SectionTwo.jsx';
import SectionThree from './components/SectionThree/SectionThree.jsx';
import Rodape from './components/Rodape/Rodape.jsx';



function App() {
  return (
    <>
      <Header />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Rodape/>
      
    </>
  )
}

export default App

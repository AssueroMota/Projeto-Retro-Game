import React, { useState } from 'react';

import logo from '../../assets/img/header/header__logo.svg';
// import logoMobile from '../../assets/img/header/header__logo-mobile.svg';
import menu from '../../assets/img/header/header__menu.svg';
import close from '../../assets/img/header/menu__close.svg';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  // Links
  const Header = [
    { name: 'Who We are', link: '#Description-main' },
    { name: 'What We Do', link: '#What-container-main' },
    { name: 'Gallery', link: '#Photos-main' },
    { name: 'Contact', link: '#Contact-main' },
  ];

  // Variavel para trocar de imagem
  const logoToShow = window.innerWidth > 1024 ? logo : logo;



  return (
    <div className={`header-main ${isMenuOpen ? 'menu-open' : ''}`}>
      <header className="header">
        {/* LOGO */}
        <div className="header-content">
          <a href='#'><img src={logoToShow} alt="Logo" /></a>
        </div>
        {/* FIM DO LOGO */}
        {/* MENU DO HEADER */}
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {Header.map((item, id) => (
            <a className='LinksHeader' href={item.link} key={id}>
              {item.name}
            </a>
          ))}
        </nav>


        {/* SELETOR DE PAISES */}

        <div className='header-container-2'>
        
          <div className="header-select-img">
            <img src={menu} className="menu-button" onClick={toggleMenu} />
          </div>
          {/* FIM DO SELETOR */}

          <a href='#Contact-main'>
            <button className='menu-button-contact'>+1 (000) 000-0000</button>
          </a>


        </div>



      </header>
      {/* FIM DO HEADER */}


      {/* MENU SIDEBAR */}
      <nav className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <img src={close} className="close-button" onClick={toggleMenu} />
        <div className='sidebar-options'>
          {Header.map((item, id) => (
            <a className='LinksSideBar' href={item.link} key={id}>
              {item.name}
            </a>

          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;

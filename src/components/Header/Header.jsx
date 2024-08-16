import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/img/header/header__menu.svg';
import close from '../../assets/img/header/menu__close.svg';
import logo from '../../assets/img/header/Logo.svg';
import logomobile from '../../assets/img/header/logomobile.svg';
import MdMenu from '../../assets/img/header/MdMenu.svg';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  const HeaderLinks = [
    { name: 'Home', link: '/' },
    { name: 'Equipe', link: '#equipe' },
    { name: 'Nosso Espaço', link: '#space' },
    { name: 'Contato', link: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoToShow = window.innerWidth > 1024 ? logo : logomobile;

  return (
    <div className="header-main">
      <header className="header">
        <div className="header-content">
          <Link to='/'><img src={logoToShow} alt="Logo" /></Link>
        </div>
        <nav className="nav-links">
          {HeaderLinks.map((item, id) => (
            <Link className='LinksHeader' to={item.link} key={id}>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className='header-menu-sidebar'>
          <img
            src={MdMenu}
            alt="Menu"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
          <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <img
              src={close}
              alt="Close Menu"
              onClick={toggleMenu}
              className="close-icon"
            />
            <nav className="sidebar-links">
              {HeaderLinks.map((item, id) => (
                item.link.startsWith('/') ? (
                  <Link to={item.link} key={id} onClick={toggleMenu}>
                    {item.name}
                  </Link>
                ) : (
                  <a href={item.link} key={id} onClick={toggleMenu}>
                    {item.name}
                  </a>
                )
              ))}
            </nav>

            {/* <nav className="sidebar-links">
              {HeaderLinks.map((item, id) => (
                <Link to={item.link} key={id} onClick={toggleMenu}>
                  {item.name}
                </Link>
              ))}
            </nav> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

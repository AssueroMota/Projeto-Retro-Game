import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/img/header/header__menu.svg';
import close from '../../assets/img/header/menu__close.svg';
import logo from '../../assets/img/header/Logo.svg';

const Header = () => {
  const HeaderLinks = [
    { name: 'Home', link: '/' },
    { name: 'Nosso Espaço', link: '#What-container-main' },
    { name: 'Equipe', link: '#Photos-main' },
    { name: 'Contato', link: '/contact' }
  ];

  const logoToShow = window.innerWidth > 1024 ? logo : logo;

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
      </header>
    </div>
  );
};

export default Header;

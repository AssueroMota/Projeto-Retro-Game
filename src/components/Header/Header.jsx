// import logo from '../../assets/img/header/header__logo.svg';
// import logoMobile from '../../assets/img/header/header__logo-mobile.svg';
import menu from '../../assets/img/header/header__menu.svg';
import close from '../../assets/img/header/menu__close.svg';
import logo from '../../assets/img/header/Logo.svg'

const Header = () => {

  // Links
  const Header = [
    { name: 'Home', link: '#Description-main' },
    { name: 'Nosso Espaço', link: '#What-container-main' },
    { name: 'Equipe', link: '#Photos-main' },
    { name: 'Contato', link: '#Contact-main' },
  ];

  // Variavel para trocar de imagem
  const logoToShow = window.innerWidth > 1024 ? logo : logo;


  return (
    <div className="header-main">
      <header className="header">
        {/* LOGO */}
        <div className="header-content">
          <a href='#'><img src={logoToShow} alt="Logo" /></a>
        </div>
        {/* FIM DO LOGO */}
        {/* MENU DO HEADER */}
        <nav className="nav-links">
          {Header.map((item, id) => (
            <a className='LinksHeader' href={item.link} key={id}>
              {item.name}
            </a>
          ))}
        </nav>
      </header>
      {/* FIM DO HEADER */}


      {/* MENU SIDEBAR */}
      {/* <nav className={sidebar ${isMenuOpen ? 'open' : ''}}>
        <img src={close} className="close-button" onClick={toggleMenu} />
        <div className='sidebar-options'>
          {Header.map((item, id) => (
            <a className='LinksSideBar' href={item.link} key={id}>
              {item.name}
            </a>
          ))}
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
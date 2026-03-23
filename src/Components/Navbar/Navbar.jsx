import React, { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import menu_close from '../../assets/menu_close.svg';
import menu_open from '../../assets/menu_open.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  };

  return (
    
    <div className='navbar'>
     {/*} <img className='logo' src={logo} alt="Logo" />*/}

      {/* Show menu open icon only when menu is closed */}
      {!isMenuOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open"
          className='nav-mob-open'
        />
      )}

      <ul ref={menuRef} className='nav-menu'>
        {/* Show close icon only when menu is open */}
        {isMenuOpen && (
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close"
            className="nav-mob-close"
          />
        )}

        <li><AnchorLink className='anchor-link' href='#home' onClick={closeMenu}>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' onClick={closeMenu}>About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work' onClick={closeMenu}>Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={closeMenu}>Contact</AnchorLink></li>
      </ul>

      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
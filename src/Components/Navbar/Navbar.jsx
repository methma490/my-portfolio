import React, { useRef, useState } from 'react';
import './Navbar.css';
//import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { motion } from 'framer-motion';
import { navVariants } from '../Animate/Animate';

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
    
    <motion.div variants={navVariants} initial='hidden' whileInView='show' className='navbar'>
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
    </motion.div>
  );
}

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes} from "react-icons/fa";
import './TabBar.css'
const TabBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)


  return(
    <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    {/* <img src={UTSelfie} alt='logo' /> */}
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="aboutme" spy={true} smooth={true} offset={50} duration={500} Click={closeMenu}>About Me</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="artifacts" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Artifacts</Link>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default TabBar
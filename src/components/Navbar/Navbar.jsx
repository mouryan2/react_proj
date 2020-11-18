import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
//import { ReactComponent as MenuIcon } from './icons/menu.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import './Navbar.css'
import PhoneIcon from '@material-ui/icons/Phone';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
// import {Spring} from 'react-spring/renderprops'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>

      <nav className="navbar">
        <div className="nav-content">

          <h3 className="banner">
            <Link to="/" >DIVYA </Link>
          </h3>


          {isMobile ? <ul>
            <NavHead />

          </ul> :
            <ul className="navitems">
              <li className="navitem" >
                <Link to="/" >
                  HOME
                  </Link>
              </li>
              <li className="navitem" >
                <Link to="/Carrer" >CAREER</Link>
              </li>
              <li className="navitem" >
                <Link to="/Contact">CONTACT</Link>
              </li>
            </ul>}
        </div>
      </nav >

    </>
  )
}

function NavHead(props) {

  const onSet=()=>{
    console.log(props.children + "hello")
  }
  return (
    <>
      <NavItem >
        <DropdownMenu onset={onSet} />
      </NavItem>
      <nav >
        <ul className="navbar-nav">{props.children}</ul>
      </nav></>
  );
}


function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <>

      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {<MenuIcon />}
        </a>
        {open && props.children}
      </li></>
  );
}

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const dropdownRef = useRef(null);

 function example(){
   console.log("trueeeeeeeeeeee")
 }

  return (
    <div className="dropdown" height="250px" ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="menu">

          <Link to="/" className="menu-item" >
            <span className="icon-button">{<HomeIcon />}</span>
         Home
        </Link>
          <a href="#" className="menu-item" onClick={() => "career" && setActiveMenu("career")}>
            <span className="icon-button">{<WorkOutlineIcon />}</span>
           Career
           </a>
          {/* <Link to="/gallery" className="menu-item"  >
            <span className="icon-button" >{<PhotoLibraryOutlinedIcon />}</span>
            Gallery
        </Link> */}
          <Link to="/Contact" className="menu-item" >
            <span className="icon-button">{<PhoneIcon />}</span>
           Contact
        </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'career'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <a href="#" className="menu-item" onClick={() => "main" && setActiveMenu("main")}>
            <span className="icon-button">{<ArrowIcon />}</span>
          My Career
           </a>
          <Link to="/skills" className="menu-item" >
            <span className="icon-button">{<BoltIcon />}</span>
            Skills
          </Link>
          <Link to="/experience" className="menu-item" >
            <span className="icon-button">{<BookmarkBorderOutlinedIcon />}</span>
            Experience
          </Link>
          <Link to="/education" className="menu-item" >
            <span className="icon-button">{<ImportContactsOutlinedIcon />}</span>
            Education
          </Link>
        </div>
      </CSSTransition>


    </div>
  );
}

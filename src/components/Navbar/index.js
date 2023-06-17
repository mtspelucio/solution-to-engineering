import React, { useState } from 'react';
import { Container } from './styles';
import Logo from '../../images/logo.png'
import { List } from "@phosphor-icons/react"

function goTo(locale) {
  let scroll

  switch(locale){
    case 1:
      scroll = { top: 0, behavior: "smooth" };
      break;
    case 2:
      scroll = { top: 800, behavior: "smooth" };
      break;
    case 3:
      scroll = { top: 1650, behavior: "smooth" };
      break;
    case 4:
      scroll = { top: 650, behavior: "smooth" };
      break;
    case 5:
      scroll = { top: 1400, behavior: "smooth" };
      break;
    default:
      break;
  }
  window.scrollTo(scroll)
}

const Menu = ({ type }) => {
  return (
    <ul className='mobile flex'>
      <li
        onClick={() => goTo(1)}
      >INICIO</li>
      <li
        onClick={() => goTo(4)}
      >MISSÃO</li>
      <li
        onClick={() => goTo(5)}
      >CONTATO</li>
    </ul>
  )
}

export default function Navbar() {
  const [handleMenu, setHandleMenu] = useState(false);

  return (
    <Container data-aos="fade-down" className='flex'>
      <div 
        className="logo flex"
        onClick={() => goTo(1)}
      >
        <img src={Logo} alt='Logo Clio' />
        CLIO
      </div>
      <div className="menu">
        <div>
          <button 
            className='flex'
            onClick={() => setHandleMenu(!handleMenu)}
          >
            <List size={25} weight="fill" />
          </button>
          {
            handleMenu === true && <Menu type={handleMenu} />
          }
        </div>

        <ul className='desktop flex'>
          <li
            onClick={() => goTo(1)}
          >INICIO</li>
          <li
            onClick={() => goTo(2)}
          >MISSÃO</li>
          <li
            onClick={() => goTo(3)}
          >CONTATO</li>
        </ul>
      </div>
    </Container>
  );
}
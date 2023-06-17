import React, { useState } from 'react';
import { Container } from './styles';
import Logo from '../../images/logo.png'
import { List } from "@phosphor-icons/react"

const Menu = ({ type }) => {
  return (
    <ul className='mobile flex'>
      <li>INICIO</li>
      <li>MISSÃO</li>
      <li>CONTATO</li>
    </ul>
  )
}

export default function Navbar() {
  const [handleMenu, setHandleMenu] = useState(false);

  return (
    // data-aos="fade-down"
    <Container  className='flex'>
        <div className="logo flex">
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
            <li>INICIO</li>
            <li>MISSÃO</li>
            <li>CONTATO</li>
          </ul>
        </div>
    </Container>
  );
}
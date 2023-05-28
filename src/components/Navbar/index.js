import React from 'react';
import { Container } from './styles';
import Logo from '../../images/logo.png'

export default function Navbar() {
  return (
    <Container data-aos="fade-down" className='flex'>
        <div className="logo flex">
            <img src={Logo} alt='Logo Clio' />
            CLIO
        </div>
        <div className="menu">
          <ul className='flex'>
            <li>INICIO</li>
            <li>MISSÃO</li>
            <li>CONTATO</li>
          </ul>
        </div>
    </Container>
  );
}
import React from 'react';
import { Container } from './styles';

import Logo from '../../images/logo.png'

export default function Footer() {
  return (
    <Container className='flex'>
        <div className='logo'>
            <img src={Logo} alt='Logo' />
            <p>CLIO</p>
        </div>
        <div className='description'>
            <p>Clio 2023</p>
            <p>Todos os direitos reservados</p>
        </div>
    </Container>
  );
}
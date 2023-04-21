import React from 'react';
import { Container } from './styles';

import MeshTerrain from '../../images/mesh-terrain.png'
import Mail from '../../images/mail.png'
import Instagram from '../../images/instagram.png'
import Whatsapp from '../../images/whatsapp.png'

export default function Contact() {
  return (
    <Container className='flex'>
        <img src={MeshTerrain} alt='Malha 3D' />
        <div className='content'>
            <h2>Entre em contato</h2>
            <p>Se você precisa solucionar problemas, não hesite em entrar em contato. Temos uma equipe especializada e estamos prontos para atender às suas necessidades, oferecendo soluções integradas e personalizadas para o seu projeto. Entre em contato conosco agora mesmo e descubra como podemos ajudá-lo.</p>
            <div className='info'>
                <span className='flex'>
                    <img src={Mail} alt='Icone' />
                    <p>CLIO@GMAIL.COM</p>
                </span>
                <span className='flex'>
                    <img src={Instagram} alt='Icone' />
                    <p>ClioSolutions</p>
                </span>
                <span className='flex'>
                    <img src={Whatsapp} alt='Icone' />
                    <p>(34) 9 8888-0000</p>
                </span>
            </div>
        </div>
    </Container>
  );
}
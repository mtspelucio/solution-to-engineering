import React from 'react';
import { Container } from './styles';

import MeshTerrain from '../../images/mesh-terrain.png'
import Mail from '../../images/mail.png'
import Instagram from '../../images/instagram.png'
import Whatsapp from '../../images/whatsapp.png'

export default function Contact() {
  return (
    <Container data-aos="fade-up" className='flex'>
        <img src={MeshTerrain} alt='Malha 3D' />
        <div className='content'>
            <h2 data-aos="fade-up" data-aos-delay="300" >Entre em contato</h2>
            <p data-aos="fade-up" data-aos-delay="300" >Se você precisa solucionar problemas, não hesite em entrar em contato. Temos uma equipe especializada e estamos prontos para atender às suas necessidades, oferecendo soluções integradas e personalizadas para o seu projeto. Entre em contato conosco agora mesmo e descubra como podemos ajudá-lo.</p>
            <div className='info'>
                <span data-aos="zoom-in" data-aos-delay="500" className='flex'>
                    <img src={Mail} alt='Icone' />
                    <p>CLIO@GMAIL.COM</p>
                </span>
                <span data-aos="zoom-in" data-aos-delay="1000" className='flex'>
                    <img src={Instagram} alt='Icone' />
                    <p>ClioSolutions</p>
                </span>
                <span data-aos="zoom-in" data-aos-delay="1500" className='flex'>
                    <img src={Whatsapp} alt='Icone' />
                    <p>(34) 9 8888-0000</p>
                </span>
            </div>
        </div>
    </Container>
  );
}
import React from 'react';
import { Container } from './styles';
import Logo from '../../images/logo.png'

export default function Initial() {
  return (
    <Container >
        <div className='text flex'>
            <h2>Nosso objetivo é</h2>
            <h1>Solucionar Problemas</h1>

            <p>Buscamos oferecer soluções inovadoras e eficazes para desafios complexos em diferentes setores. Combinando conhecimentos a empresa pode desenvolver projetos desde  desenvolvimento de máquinas e equipamentos até a criação de softwares para otimizar processos industriais.</p>

            <button>ENTRAR EM CONTATO</button>
        </div>

        <img src={Logo} alt='Logo Clio' />
    </Container>
  );
}
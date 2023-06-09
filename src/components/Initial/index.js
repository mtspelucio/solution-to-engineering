import React from 'react';
import { Container } from './styles';

import Video from '../../images/video.gif'

// import Model3D from '../Model3D';

export default function Initial() {
  
  const goTo = () => {
    window.scrollTo({ 
      top: 1650, 
      behavior: "smooth" 
    })
  }

  return (
    <Container >
      <img src={Video} alt='model' />
      <div className='text flex'>
          <h2 data-aos="fade-right">Nosso objetivo é</h2>
          <h1 data-aos="fade-right">Solucionar Problemas</h1>

          <p data-aos="fade-right" data-aos-delay="500">Buscamos oferecer soluções inovadoras e eficazes para desafios complexos em diferentes setores. Combinando conhecimentos a empresa pode desenvolver projetos desde  desenvolvimento de máquinas e equipamentos até a criação de softwares para otimizar processos industriais.</p>

          <button 
            onClick={goTo}
            data-aos="fade-right" data-aos-delay="500" 
          >ENTRAR EM CONTATO</button>
      </div>

      {/* <div data-aos="fade-up" data-aos-delay="1000" className='model flex'>
        <Model3D modelPath='robo.glb' scale={4} />
      </div> */}
    </Container>
  );
}
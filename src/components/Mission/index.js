import React from 'react';
import { Container } from './styles';

import CircleMash from '../../images/mesh-circle.png'

export default function Mission() {
  return (
    <Container className='flex'>
        <h2 data-aos="fade-up">Nossa missão</h2>
        <div className='content flex'>
          <img data-aos="fade-up" data-aos-delay="300" src={CircleMash} alt='Malha 3D circular' />
          <div className='text flex' data-aos-delay="500">
            <p data-aos="fade-up"  >
              Oferecer soluções integradas e personalizadas para atender às necessidades específicas de cada cliente. Com um trabalho colaborativo e multidisciplinar, envolvendo profissionais especializados.
            </p>
            <p data-aos="fade-up" >
              Entre os principais benefícios oferecidos estão a melhoria da eficiência produtiva, a redução de custos e o aumento da produtividade no mercado. Além disso, a empresa pode contribuir para o desenvolvimento de novas tecnologias e soluções que podem beneficiar a sociedade como um todo.
            </p>
            <p data-aos="fade-up" >
              Em resumo, uma empresa que tem como objetivo solucionar problemas utilizando engenharia mecânica e programação busca aplicar o conhecimento técnico e científico para oferecer soluções inovadoras e eficientes para desafios complexos em diferentes setores.
            </p>
          </div>
        </div>
    </Container>
  );
}
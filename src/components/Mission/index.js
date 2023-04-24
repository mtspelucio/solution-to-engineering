import React from 'react';
import { Container } from './styles';

import CircleMash from '../../images/mesh-circle.png'

export default function Mission() {
  return (
    <Container className='flex'>
        <h2>Nossa missão</h2>
        <div className='content flex'>
          <img src={CircleMash} alt='Malha 3D circular' />
          <div className='text flex'>
            <p>
              O principal objetivo dessa empresa é oferecer soluções integradas e personalizadas para atender às necessidades específicas de cada cliente. Para isso, é necessário um trabalho colaborativo e multidisciplinar, envolvendo engenheiros mecânicos, programadores, designers e outros profissionais especializados.
            </p>
            <p>
              Entre os principais benefícios oferecidos por uma empresa desse tipo estão a melhoria da eficiência produtiva, a redução de custos e o aumento da produtividade no mercado. Além disso, a empresa pode contribuir para o desenvolvimento de novas tecnologias e soluções que podem beneficiar a sociedade como um todo.
            </p>
            <p>
              Em resumo, uma empresa que tem como objetivo solucionar problemas utilizando engenharia mecânica e programação busca aplicar o conhecimento técnico e científico para oferecer soluções inovadoras e eficientes para desafios complexos em diferentes setores.
            </p>
          </div>
        </div>
    </Container>
  );
}
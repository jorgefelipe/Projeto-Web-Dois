import React from 'react';

import { Container } from 'pages/SiteReact/Componente/Meio/styles';

const Meio: React.FC = () => (
  <Container>
    <div className="meio">
      <h1>
        <strong>React</strong>
      </h1>
      <div className="frase">
        A JavaScript library for building user interfaces
      </div>
      <div className="botam">
        <button type="button" className="botao">
          Get Started
        </button>
      </div>
      <div className="link">
        <a href="https://reactjs.org/tutorial/tutorial.html">
          Take the Tutorial
        </a>
      </div>
    </div>
  </Container>
);

export default Meio;

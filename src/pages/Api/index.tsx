import React, { useState, useEffect } from 'react';

// import api from './Api';

interface IFilmes {
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    image: {
      medium: string;
      original: string;
    };
  };
}

const App: React.FC = () => {
  const [filmes, setFilmes] = useState<IFilmes[]>([]);

  const getFilmes = () => {
    fetch('http://api.tvmaze.com/search/shows?q=girls')
      .then((response) => response.json())
      .then((data) => {
        setFilmes(data);
      })
      .catch((error) => console.error(error));
  };

  console.log(filmes);

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <div>
      <h1>Listar os Filmes</h1>
      {filmes?.length > 0 &&
        filmes.map((filme) => (
          <li key={filme.show.id}>
            <h2>
              <strong>Título: </strong>
              {filme.show.name}
            </h2>
            {filme.show?.image?.original && (
              <img src={filme.show.image.medium} alt="foto" />
            )}
          </li>
        ))}
    </div>
  );
};

export default App;

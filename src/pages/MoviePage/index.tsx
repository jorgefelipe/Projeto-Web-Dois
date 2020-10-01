import React, { useState } from 'react';

import { Button } from 'components';

import { getMovies } from 'services/movies';
import { Text } from 'styles/styledComponents';

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
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const getFilmes = async () => {
    try {
      setLoading(true);
      const resp = await getMovies(search);
      setFilmes(resp.data);
    } catch (err) {
      console.log(err);
      alert(`Erro ao tentar obter lista de filmes ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Text>Pesquisar filme</Text>
      <input
        placeholder="Digite o nome do filme"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button loading={loading} label="Pesquisar" onPress={() => getFilmes()} />
      <h1>Listar os Filmes</h1>
      {(filmes?.length > 0 &&
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
        ))) || <h1>Nenhum filme encontrado</h1>}
    </div>
  );
};

export default App;

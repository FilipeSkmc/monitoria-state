import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Musics from './components/Musics';

import './App.css';

import { MusicType, musics } from './data/data';

function App() {
  // criando um state para mostrar ou não o form
  const [showForm, setShowForm] = useState<boolean>(false);

  // criando um state para a lista de músicas
  // o valor inicial é o array de músicas que está no arquivo data.ts
  const [musicList, setMusicList] = useState<MusicType[]>(musics);

  // função para adicionar a música na lista
  const handleAddMusic = (music: MusicType) => {
    // adicionando a música no array de músicas
    // o spread operator (...) pega todos os itens do array e adiciona no novo array
    setMusicList([...musicList, music]);
  };

  return (
    <div className="app">
      <Header />

      {/*
        se showForm for true, renderiza o form
        se showForm for false, renderiza o botão para mostrar o form
      */}

      { !showForm ? (
        <button
          onClick={ () => setShowForm(true) }
        >
          Nova Música
        </button>
      ) : (
        <Form setShowForm={ setShowForm } handleAddMusic={ handleAddMusic } />
      ) }

      <Musics musics={ musicList } />
    </div>
  );
}

export default App;

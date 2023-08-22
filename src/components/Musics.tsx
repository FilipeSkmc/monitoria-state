import MusicCard from './MusicCard';
import { MusicType } from '../data/data';
import './Musics.css';

// criando um type para o props
type MusicProps = {
  musics: MusicType[];
};

function Musics({ musics }: MusicProps) {
  return (
    <div className="musics">
      <h2>Músicas adicionadas</h2>
      {
        // mapeando o array de músicas e renderizando um componente para cada música
        musics.map(({ name, duration }, index) => (
          <MusicCard
            key={ index }
            name={ name }
            duration={ duration }
          />
        ))
      }
    </div>
  );
}

export default Musics;

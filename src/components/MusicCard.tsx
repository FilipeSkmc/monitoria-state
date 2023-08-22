import { MusicType } from '../data/data';

import './MusicCard.css';

// criando um type para o props
function MusicCard({ name, duration }: MusicType) {
  return (
    <div className="card">
      <p>{`${name} - ${duration}`}</p>
    </div>
  );
}

export default MusicCard;

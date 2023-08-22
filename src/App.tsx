import Header from './components/Header';
import Form from './components/Form';
import Musics from './components/Musics';

import './App.css';

import { musics } from './data/data';

function App() {
  return (
    <div className="app">
      <Header />

      <Form />

      <Musics musics={ musics } />
    </div>
  );
}

export default App;

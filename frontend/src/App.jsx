import './styles/globals.scss';
import './styles/reset.scss';

import MusicForm from './components/MusicForm/MusicForm';
import Filter from './components/Filter/Filter';
import MusicList from './components/MusicList/MusicList';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <header className={s.title}>
        <h1>Music Libery App</h1>
      </header>
      <main className={s.mainBlock}>
        <div className={s.leftColumn}>
          <MusicForm />
        </div>
        
        <div className={s.rightColumn}>
          <Filter />
          <MusicList />
        </div>
      </main>
    </div>
  );
}

export default App;

// import './styles/globals.scss';
// import './styles/reset.scss';

import MusicForm from '../../common/MusicForm/MusicForm';
import Filter from '../../common/Filter/Filter';
import MusicList from '../../common/MusicList/MusicList';

import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
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
};

export default Home;

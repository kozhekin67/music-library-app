import { useState } from 'react';
import cx from 'classnames';

import Header from '../../common/Header/Header';
import MusicForm from '../../common/MusicForm/MusicForm';
import Filter from '../../common/Filter/Filter';
import MusicList from '../../common/MusicList/MusicList';
import Button from '../../common/Button/Button';

import s from './Home.module.scss';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleForm = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className={s.root}>
      <Header text="Music Libery App" />
      <main className={cx(s.main, { [s.twoColumn]: isOpen })}>
        <div className={cx(s.firstBlock)}>
          <MusicForm className={s.musicForm} closeForm={handleToggleForm} />
        </div>
        <div className={cx(s.secondBlock)}>
          <div className={s.secondBlock__top}>
            <Button
              className={s.addForm}
              title="form"
              iconName="form"
              onClick={handleToggleForm}
            />
            <Filter />
          </div>
          <MusicList isOpen={isOpen} toggleForm={handleToggleForm} />
        </div>
      </main>
    </div>
  );
};

export default Home;

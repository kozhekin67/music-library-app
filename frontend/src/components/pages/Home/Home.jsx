import { useState } from 'react';
import cx from 'classnames';

import MusicForm from '../../common/MusicForm/MusicForm';
import Filter from '../../common/Filter/Filter';
import MusicList from '../../common/MusicList/MusicList';
import Button from '../../common/Button/Button';

import { ReactComponent as FormIcon } from '../../svg/Form.svg';

import s from './Home.module.scss';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleForm = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className={s.root}>
      <header className={s.title}>
        <h1>Music Libery App</h1>
      </header>
      <main className={cx(s.main, { [s.twoColumn]: isOpen })}>
        <div className={cx(s.firstBlock)}>
          <MusicForm className={s.musicForm} closeForm={handleToggleForm} />
        </div>
        <div className={cx(s.secondBlock)}>
          <div className={s.secondBlock__top}>
            <Button
              className={s.addForm}
              title="form"
              image={<FormIcon className={s.addForm__icon} />}
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

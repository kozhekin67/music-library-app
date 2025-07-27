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

  const handleToggleForm = () => setIsOpen(!isOpen);
  const handleCloseForm = () => setIsOpen(false);
  const handleCloseFormTablet = () => {
    if (window.innerWidth < 775) {
      handleCloseForm();
    }
  };

  return (
    <div className={s.root}>
      <header className={s.title}>
        <h1>Music Libery App</h1>
      </header>
      <main className={cx(s.mainBlock, { [s.mainBlock_twoColumn]: isOpen })}>
        <div className={cx(s.leftColumn, { [s.leftColumn_visible]: isOpen })}>
          <MusicForm className={s.musicForm} closeForm={handleCloseForm} />
        </div>
        <div className={cx(s.rightColumn, { [s.rightColumn_reduced]: isOpen })}>
          <div className={s.rightColumn__top}>
            <Button
              className={s.addForm}
              title="form"
              image={<FormIcon className={s.addForm__icon} />}
              onClick={handleToggleForm}
            />
            <Filter />
          </div>
          <MusicList closeFormTablet={handleCloseFormTablet} />
        </div>
      </main>
    </div>
  );
};

export default Home;

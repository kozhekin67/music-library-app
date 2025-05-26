import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSong } from '../../redux/compositions/actionCreators';

import Button from '../Button/Button';
import { ReactComponent as SongIcon } from '../svg/SongIcon.svg';
import { ReactComponent as Edit } from '../svg/Edit.svg';
import { ReactComponent as Viewing } from '../svg/Viewing.svg';
import { ReactComponent as Removal } from '../svg/Removal.svg';

import s from './MusicList.module.scss';

const MusicList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  const handleDeleteSong = (e, id) => dispatch(deleteSong(id));
  return (
    <div className={s.root}>
      <h1 className={s.titleList}>Music list</h1>
      <ul className={s.list}>
        {songs.map((song) => (
          <li className={s.list__item} key={song.id}>
            <div className={s.leftColumn}>
              <SongIcon className={s.leftColumn__icon} />
              <div className={s.leftColumn__name}>
                <div className={s.leftColumn__author}>{song.author}</div>
                <div className={s.leftColumn__composition}>
                  {song.composition}
                </div>
              </div>
            </div>
            <div className={s.rightColumn}>
              <Button
                className={s.rightColumn__button}
                image={<Edit className={s.rightColumn__icon} />}
              />
              <Button
                className={s.rightColumn__button}
                image={<Viewing className={s.rightColumn__icon} />}
              />
              <Button
                className={s.rightColumn__button}
                onClick={handleDeleteSong}
                cbData={song.id}
                image={<Removal className={s.rightColumn__icon} />}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSong } from '../../redux/compositions/actionCreators';
import { selectTextFilter } from '../../redux/slices/fllterSlise';
import useClickOutside from '../hooks/useClickOutside';

import Button from '../Button/Button';
import ViewWindow from '../ViewWindow/ViewWindow';
import { ReactComponent as SongIcon } from '../svg/SongIcon.svg';
import { ReactComponent as Edit } from '../svg/Edit.svg';
import { ReactComponent as Viewing } from '../svg/Viewing.svg';
import { ReactComponent as Removal } from '../svg/Removal.svg';

import s from './MusicList.module.scss';

const MusicList = () => {
  const [songViewId, setSongViewId] = useState(null);

  const ref = useClickOutside(() => setSongViewId(null));

  const songs = useSelector((state) => state.songs);
  const textFilter = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  const handleDeleteSong = (e, id) => dispatch(deleteSong(id));
  const handleOpenQuickView = (e, id) => setSongViewId(id);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSongViewId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const filterSongs = songs.filter((song) => {
    const matchesText = (song.author + song.composition)
      .toLowerCase()
      .includes(textFilter.toLowerCase());
    return matchesText;
  });

  return (
    <div className={s.root}>
      <h1 className={s.titleList}>Music list</h1>
      <ul className={s.list}>
        {filterSongs.map((song) => (
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
                onClick={handleOpenQuickView}
                cbData={song.id}
                image={<Viewing className={s.rightColumn__icon} />}
              />
              <Button
                className={s.rightColumn__button}
                onClick={handleDeleteSong}
                cbData={song.id}
                image={<Removal className={s.rightColumn__icon} />}
              />
              {songViewId === song.id && (
                <ViewWindow
                  ref={ref}
                  className={s.ViewWindowBlock}
                  author={song.author}
                  composition={song.composition}
                  genre={song.genre}
                  date={song.date}
                  onClick={handleOpenQuickView}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;

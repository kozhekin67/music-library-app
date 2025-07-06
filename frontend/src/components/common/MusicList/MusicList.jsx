import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTextFilter } from '../../../redux/slices/filterSlice';
import useClickOutside from '../../hooks/useClickOutside';

import Button from '../Button/Button';
import ViewWindow from '../ViewWindow/ViewWindow';
import Editing from '../Editing/EditingForm';

import { ReactComponent as SeparateWindow } from '../../svg/SeparateWindow.svg';
import { ReactComponent as SongIcon } from '../../svg/SongIcon.svg';
import { ReactComponent as Edit } from '../../svg/Edit.svg';
import { ReactComponent as Viewing } from '../../svg/Viewing.svg';
import { ReactComponent as Removal } from '../../svg/Removal.svg';

import s from './MusicList.module.scss';

const MusicList = () => {
  const [songViewId, setSongViewId] = useState(null);
  const [songEditingId, setSongEditingId] = useState(null);

  const ref = useClickOutside(
    () => setSongViewId(null) || setSongEditingId(null)
  );

  const songs = useSelector((state) => state.songs.songs);
  const textFilter = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'songs/fetchSongs' });
  }, [dispatch]);

  const handleDeleteSong = (e, id) =>
    dispatch({ type: 'songs/removeSong', payload: id });

  const handleOpenQuickView = (e, id) => setSongViewId(id);
  const handleOpenEditind = (e, id) => setSongEditingId(id);

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
              <Link className={s.rightColumn__button} to={`/song/${song.id}`}>
                <SeparateWindow className={s.rightColumn__icon} />
              </Link>
              <Button
                className={s.rightColumn__button}
                onClick={handleOpenEditind}
                cbData={song.id}
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
              {songEditingId === song.id && (
                <Editing
                  className={s.editingBlock}
                  ref={ref}
                  author={song.author}
                  composition={song.composition}
                  genre={song.genre}
                  date={song.date}
                  onClick={handleDeleteSong}
                  cbData={song.id}
                  openEditind={handleOpenEditind}
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

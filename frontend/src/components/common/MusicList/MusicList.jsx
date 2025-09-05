import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectTextFilter } from '../../../redux/slices/filterSlice';
import useClickOutside from '../../hooks/useClickOutside';
import pressingEscape from '../../hooks/pressingEscape';

import Button from '../Button/Button';
import ViewWindow from '../ViewWindow/ViewWindow';
import Editing from '../Editing/EditingForm';

import { ReactComponent as SeparateWindow } from '../../svg/SeparateWindow.svg';
import { ReactComponent as SongIcon } from '../../svg/SongIcon.svg';

import s from './MusicList.module.scss';

const MusicList = ({ isOpen, toggleForm }) => {
  const [songViewId, setSongViewId] = useState(null);
  const [songEditingId, setSongEditingId] = useState(null);

  const songViewRef = useClickOutside(() => setSongViewId(null));
  const editingRef = useClickOutside(() => setSongEditingId(null));

  const songs = useSelector((state) => state.songs.songs);
  const textFilter = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'songs/fetchSongs' });
  }, [dispatch]);

  const handleDeleteSong = (e, id) =>
    dispatch({ type: 'songs/removeSong', payload: id });

  const setState = isOpen ? toggleForm : () => {};

  const handleOpenAction = (e, cbData) => {
    const { type, id } = cbData;

    if (type === 'edit') {
      setSongEditingId(id);
      setState();
    } else if (type === 'view') {
      setSongViewId(id);
      setState();
    } else if (type === 'close') {
      setSongViewId(null);
      setState();
    }
  };

  const filterSongs = songs.filter((song) => {
    const matchesText = (song.author + song.composition)
      .toLowerCase()
      .includes(textFilter.toLowerCase());
    return matchesText;
  });

  pressingEscape(setSongViewId);
  pressingEscape(setSongEditingId);

  return (
    <div className={s.root}>
      <h1 className={s.titleList}>Music list</h1>
      <ul className={s.list}>
        {filterSongs.map((song) => (
          <li className={s.list__item} key={song.id}>
            <div className={s.leftColumn}>
              <div>
                <SongIcon className={s.leftColumn__icon} />
              </div>
              <div className={s.leftColumn__name}>
                <div className={s.leftColumn__author}>{song.author}</div>
                <div className={s.leftColumn__composition}>
                  {song.composition}
                </div>
              </div>
            </div>
            <div className={s.rightColumn}>
              <Link
                className={s.panelButton}
                title="open in a new window"
                to={`/song/${song.id}`}
              >
                <SeparateWindow className={s.panelButton__icon} />
              </Link>
              <Button
                className={s.panelButton}
                title="open the editing window"
                onClick={handleOpenAction}
                cbData={{ type: 'edit', id: song.id }}
                iconName="edit"
              />
              <Button
                className={s.panelButton}
                title="open a quick preview"
                onClick={handleOpenAction}
                cbData={{ type: 'view', id: song.id }}
                iconName="viewing"
              />
              {songViewId === song.id && (
                <ViewWindow
                  ref={songViewRef}
                  className={s.ViewWindowBlock}
                  song={song}
                  cbData={{ type: 'close' }}
                  onClick={handleOpenAction}
                />
              )}
              {songEditingId === song.id && (
                <Editing
                  className={s.editingBlock}
                  ref={editingRef}
                  author={song.author}
                  composition={song.composition}
                  genre={song.genre}
                  date={song.date}
                  onClick={handleDeleteSong}
                  id={song.id}
                  SongEditingId={setSongEditingId}
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

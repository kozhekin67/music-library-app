import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { ReactComponent as Back } from '../../svg/Back.svg';

import s from './ElementProperties.module.scss';

const ElementProperties = () => {
  const { id } = useParams();
  const songs = useSelector((state) => state.songs.songs);
  const song = songs.find((song) => song.id === id);

  return (
    <div className={s.app}>
      <h1 className={s.title}>Composition details</h1>
      <div className={s.informationBlock}>
        <div className={s.block}>
          <p className={s.block__title}>Author</p>
          <p className={s.block__text}>{song.author}</p>
        </div>
        <div className={s.block}>
          <p className={s.block__title}>Composition</p>
          <p className={s.block__text}>{song.composition}</p>
        </div>
        <div className={s.block}>
          <p className={s.block__title}>Genre</p>
          <p className={s.block__text}>{song.genre}</p>
        </div>
        <div className={s.block}>
          <p className={s.block__title}>Date</p>
          <p className={s.block__text}>{song.date}</p>
        </div>
      </div>
      <Link className={s.button} to={'/'}>
        <Back className={s.button__icon} />
        <p className={s.button__text}>go back to the list</p>
      </Link>
    </div>
  );
};
export default ElementProperties;

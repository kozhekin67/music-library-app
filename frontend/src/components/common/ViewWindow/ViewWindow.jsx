import cx from 'classnames';
import Button from '../Button/Button';
import { ReactComponent as Hiding } from '../../svg/Hiding.svg';

import s from './ViewWindow.module.scss';

const ViewWindow = ({
  className,
  author,
  composition,
  genre,
  date,
  onClick,
  onBlur,
  ref,
}) => {
  return (
    <div className={cx(s.root, className)} ref={ref}>
      <div className={s.informationBlock}>
        <div className={s.block}>
          <p className={s.block__title}>Author</p>
          <p className={s.block__text}>{author}</p>
        </div>
        <div className={s.block}>
          <p className={s.block__title}>Composition</p>
          <p className={s.block__text}>{composition}</p>
        </div>
        <div className={s.block}>
          <p className={s.block__title}>Genre</p>
          <p className={s.block__text}>{genre}</p>
        </div>
        <div className={s.block}>
          <p className={s.block__title}>Date</p>
          <p className={s.block__text}>{date}</p>
        </div>
      </div>
      <div>
        <Button
          className={s.hideButton}
          title="to close"
          onClick={onClick}
          image={<Hiding className={s.hideButton__icon} onBlur={onBlur} />}
        />
      </div>
    </div>
  );
};

export default ViewWindow;

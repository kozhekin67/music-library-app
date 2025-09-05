import { func, object } from 'prop-types';
import cx from 'classnames';

import SongDetails from '@/stubs/SongDetails';
import Button from '@/common/Button/Button';

import s from './ViewWindow.module.scss';

const ViewWindow = ({ className, onClick, ref, song, cbData }) => {
  return (
    <div className={cx(s.root, className)} ref={ref}>
      <div className={s.informationBlock}>
        {SongDetails.map((item) => (
          <div className={s.block}>
            <p className={s.block__title}>{item.title}</p>
            <p className={s.block__text}>{song[item.text]}</p>
          </div>
        ))}
      </div>
      <div>
        <Button
          className={s.hideButton}
          title="to close"
          cbData={cbData}
          onClick={onClick}
          iconName="hidding"
        />
      </div>
    </div>
  );
};

ViewWindow.propTypes = {
  ref: object,
  song: object,
  onClick: func,
};

export default ViewWindow;

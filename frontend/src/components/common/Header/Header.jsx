import { string } from 'prop-types';
//import cx from 'classnames';

import s from './Header.module.scss';

const Header = ({ text }) => {
  return (
    <header className={s.title}>
      <h1>{text}</h1>
    </header>
  );
};

Header.propTypes = {
  text: string,
};

export default Header;

import React from 'react';
import { string, node, func } from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

const Button = ({ className, type = 'button', text, image, onClick }) => {
  return (
    <button className={cx(s.root, className)} type={type} onClick={onClick}>
      {text}
      {image}
    </button>
  );
};

Button.propTypes = {
  className: string,
  type: string,
  text: string,
  image: node,
  onClick: func,
};

export default Button;

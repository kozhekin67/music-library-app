import React, { useCallback } from 'react';
import { string, node, func } from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon/Icon';
import s from './Button.module.scss';

const Button = ({
  className,
  type = 'button',
  text,
  image,
  iconName,
  onClick,
  cbData,
  title,
}) => {
  const handleClick = useCallback(
    (e) => {
      if (onClick) {
        onClick(e, cbData);
      }
    },
    [cbData, onClick]
  );

  return (
    <button
      className={cx(s.root, className)}
      type={type}
      title={title}
      onClick={handleClick}
    >
      <span>{text}</span>
      {iconName && <Icon name={iconName} className={s.icon} />}
      {image}
    </button>
  );
};

Button.propTypes = {
  className: string,
  type: string,
  text: string,
  title: string,
  image: node,
  onClick: func,
  sbData: string,
};

export default Button;

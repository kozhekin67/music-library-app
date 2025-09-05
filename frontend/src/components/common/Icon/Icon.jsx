import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';

import { ReactComponent as back } from '../../svg/Back.svg';
import { ReactComponent as dropdownArrow } from '../../svg/DropdownArrow.svg';
import { ReactComponent as edit } from '../../svg/Edit.svg';
import { ReactComponent as form } from '../../svg/Form.svg';
import { ReactComponent as hiding } from '../../svg/Hiding.svg';
import { ReactComponent as removal } from '../../svg/Removal.svg';
import { ReactComponent as separateWindow } from '../../svg/SeparateWindow.svg';
import { ReactComponent as songIcon } from '../../svg/SongIcon.svg';
import { ReactComponent as viewing } from '../../svg/Viewing.svg';

const icons = {
  back,
  dropdownArrow,
  edit,
  form,
  hiding,
  removal,
  separateWindow,
  songIcon,
  viewing,
};

const Icon = ({ name, className, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={cx(className)} {...props} />;
};

Icon.propTypes = {
  name: string.isRequired,
  className: string,
};

export default Icon;

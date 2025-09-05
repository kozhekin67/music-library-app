import React, { useCallback, useState, useEffect } from 'react';
import { func, string } from 'prop-types';
import cx from 'classnames';

import useClickOutside from '../../hooks/useClickOutside';
import DropdownOptions from '../../../stubs/DropdownOptions';
import { ReactComponent as Arrow } from '../../svg/DropdownArrow.svg';

import s from './CustomSelect.module.scss';

const Dropdown = ({ value, onChange }) => {
  const placeholder = 'Сhoose a genre';
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleToggleDropdown = () => {
    setIsOpen((state) => !state);
  };

  const ref = useClickOutside(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 50);
    }
  });

  const handleSelectingAnItem = useCallback(
    (label) => {
      setSelectedValue(label);
      onChange(label);
      handleToggleDropdown();
    },
    [onChange]
  );

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <div className={s.root}>
      <div
        className={cx(
          s.button,
          { [s.focus]: isOpen },
          { [s.selected]: selectedValue }
        )}
      >
        <span className={s.text} onClick={handleToggleDropdown}>
          {selectedValue || placeholder}
        </span>
        <Arrow className={cx(s.icon)} />
      </div>
      <ul className={cx(s.list, { [s.listActive]: isOpen })} ref={ref}>
        {DropdownOptions.map(({ value, label }) => (
          <li
            className={s.listActive__item}
            key={value}
            onClick={() => handleSelectingAnItem(label)}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  className: string,
  value: string,
  onChange: func,
};

export default Dropdown;

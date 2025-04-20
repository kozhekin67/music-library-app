import React from 'react';
import { Field } from 'formik';
import { string, func } from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';

const Input = (props) => {
  const {
    name,
    className,
    placeholder,
    type = 'text',
    value,
    onChange,
  } = props;

  return (
    <Field
      name={name}
      className={cx(s.root, className)}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

Input.propTypes = {
  className: string,
  type: string,
  placeholder: string,
  name: string.isRequired,
  onChange: func,
};

export default Input;

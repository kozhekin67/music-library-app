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
    <input
      name={name}
      className={cx(s.root, className)}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      autocomplete="off"
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
  value: string,
};

export default Input;

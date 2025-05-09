import React, { useCallback } from 'react';
import { string } from 'prop-types';
import Select from 'react-select';

//import options from '../../stubs/options';
import s from './CustomSelect.module.scss';

const CustomSelect = (props) => {
  const { placeholder, options, onChange, cbData } = props;

  const handleChange = useCallback(
    (e) => {
      if (onChange) {
        onChange(e, cbData);
      }
    },
    [cbData, onChange]
  );

  return (
    <div className={s.customSelect}>
      <Select
        className={s.reactSelect}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

CustomSelect.propTypes = {
  classNamePrefix: string,
  placeholder: string,
};

export default CustomSelect;

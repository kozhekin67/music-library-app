import { useDispatch, useSelector } from 'react-redux';
import {
  setTextFilter,
  selectTextFilter,
} from '../../redux/slices/filterSlise';

import Input from '../Input/Input';

import s from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const textFilter = useSelector(selectTextFilter);
  const handleTextFilterChange = (event) => {
    dispatch(setTextFilter(event.target.value));
  };

  return (
    <div className={s.block}>
      <Input
        className={s.block__input}
        placeholder="Filter by author/composition"
        value={textFilter}
        onChange={handleTextFilterChange}
      />
    </div>
  );
};

export default Filter;

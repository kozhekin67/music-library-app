import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  setTextFilter,
  selectTextFilter,
} from '../../../redux/slices/filterSlice';

import Input from '../Input/Input';

import s from './Filter.module.scss';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';

  const dispatch = useDispatch();
  const textFilter = useSelector(selectTextFilter);
  const handleTextFilterChange = (event) => {
    const newValue = event.target.value;
    dispatch(setTextFilter(newValue));
    setSearchParams({ search: newValue });
  };

  useEffect(() => {
    dispatch(setTextFilter(searchQuery));
  }, [searchQuery, dispatch]);

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

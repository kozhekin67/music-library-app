import { React } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import cx from 'classnames';

import validationSchema from '../../utils/validationSchema';
import { editSong } from '../../redux/slices/songsSlise';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dropdown from '../CustomSelect/CustomSelect';

import s from './EditingForm.module.scss';

const EditingForm = ({
  ref,
  className,
  author,
  composition,
  genre,
  date,
  onClick,
  cbData,
  openEditind,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      editSong({
        author: values.author,
        composition: values.composition,
        genre: values.genre,
        date: values.date,
        id: cbData,
      })
    );
    resetForm();
    openEditind(null);
  };

  return (
    <div className={cx(s.root, className)} ref={ref}>
      <Formik
        initialValues={{
          author,
          composition,
          genre,
          date,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.form__block}>
              <label className={s.form__label}>Author</label>
              <Input
                className={s.form__input}
                name="author"
                value={values.author}
                onChange={handleChange}
                placeholder="Enter the author"
              />
              <ErrorMessage
                className={s.form__errorText}
                name="author"
                component="div"
              />
            </div>
            <div className={s.form__block}>
              <label className={s.form__label}>Composition</label>
              <Input
                className={s.form__input}
                name="composition"
                value={values.composition}
                onChange={handleChange}
                placeholder="Enter the song"
              />
              <ErrorMessage
                className={s.form__errorText}
                name="composition"
                component="div"
              />
            </div>
            <div className={s.form__block}>
              <label className={s.form__label}>Genre</label>
              <Dropdown
                value={values.genre}
                onChange={(value) => setFieldValue('genre', value)}
              />
              <ErrorMessage
                className={s.form__errorText}
                name="genre"
                component="div"
              />
            </div>
            <div className={s.form__block}>
              <label className={s.form__label}>Date</label>
              <Input
                className={s.form__input}
                name="date"
                value={values.date}
                onChange={handleChange}
                placeholder="ДД.ММ.ГГГГ"
                maxLength={10}
              />
              <ErrorMessage
                className={s.form__errorText}
                name="date"
                component="div"
              />
            </div>
            <div className={s.form__buttonsBlock}>
              <Button
                className={cx(s.form__button, s.form__button_delete)}
                onClick={onClick}
                cbData={cbData}
                text="Delete"
              />
              <Button
                className={cx(s.form__button, s.form__button_save)}
                type="submit"
                text="Save"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditingForm;

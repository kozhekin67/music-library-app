import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
// import { useDispatch, useSelector } from 'react-redux';

import options from '../../stubs/options';
import Button from '../Button/Button';
import Input from '../Input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';
import { ReactComponent as FormIcon } from '../svg/Form.svg';
import { ReactComponent as AddSong } from '../svg/AddSong.svg';

import s from './MusicForm.module.scss';

const MusicForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFormHandler = () => setIsOpen(!isOpen);

  const validationSchema = Yup.object({
    author: Yup.string()
      .required('Введите автора')
      .min(2, 'введите минимум 2 символа')
      .max(50, 'введите максимум 50 символов'),
    composition: Yup.string()
      .required('Введите композицию')
      .min(2, 'введите минимум 2 символа')
      .max(50, 'введите максимум 50 символов'),
    genre: Yup.string().required('Выберите жанр'),
    date: Yup.string()
      .required('Дата обязательна')
      .matches(/^\d{2}\.\d{2}\.\d{4}$/, 'Формат: ДД.ММ.ГГГГ'),
  });

  const findSelectOption = (genre) => {
    options.find((option) => option.value === genre);
  };

  const handleGenreChange = (setFieldValue) => (option) => {
    setFieldValue('genre', option.value);
  };

  return (
    <div className={s.root}>
      <Button
        className={s.addForm}
        text="Form"
        image={<FormIcon className={s.addForm__icon} />}
        onClick={toggleFormHandler}
      />

      {isOpen && (
        <Formik
          initialValues={{ author: '', composition: '', genre: '', date: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Отправленные данные:', values);
          }}
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
                <CustomSelect
                  placeholder="Choose a genre"
                  name="genre"
                  value={findSelectOption(values.genre)}
                  onChange={handleGenreChange(setFieldValue)}
                  options={options}
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
                  type="data"
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
              <Button
                className={cx(s.form__addSong, s.addSong)}
                type="submit"
                text="Add song"
                image={<AddSong className={s.addSong__icon} />}
              />
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default MusicForm;

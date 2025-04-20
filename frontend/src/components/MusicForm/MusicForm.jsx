import React, { useState, useCallback } from 'react';
import { Formik, Form } from 'formik';
import cx from 'classnames';
// import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import Input from '../Input/Input';
import { ReactComponent as FormIcon } from '../svg/Form.svg';
import { ReactComponent as AddSong } from '../svg/AddSong.svg';

import s from './MusicForm.module.scss';

const MusicForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFormHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <div className={s.root}>
      <Button
        className={s.addForm}
        text="Form"
        image={<FormIcon className={s.addForm__icon} />}
        onClick={toggleFormHandler}
      />

      {isOpen && (
        <Formik initialValues={{ author: '', composition: '', date: '' }}>
          {({ values, handleChange }) => (
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
              </div>
              <div className={s.form__block}>
                <label className={s.form__label}>Date</label>
                <Input
                  className={s.form__input}
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  placeholder="ДД.ММ.ГГГГ"
                />
              </div>
              <Button
                className={cx(s.form__addSong, s.addSong)}
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

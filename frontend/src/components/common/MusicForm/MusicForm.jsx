import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import cx from 'classnames';

import validationSchema from '../../../utils/validationSchema';
import { addSong } from '../../../redux/slices/songsSlise';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dropdown from '../CustomSelect/CustomSelect';
import { ReactComponent as FormIcon } from '../../svg/Form.svg';
import { ReactComponent as AddSong } from '../../svg/AddSong.svg';

import s from './MusicForm.module.scss';

const MusicForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFormHandler = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const song = {
      author: values.author,
      composition: values.composition,
      genre: values.genre,
      date: values.date,
      id: Date.now(),
    };
    dispatch(addSong(song));
    resetForm();
    setIsOpen(false);
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

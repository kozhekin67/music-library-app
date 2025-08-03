import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { func } from 'prop-types';
import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { formattedText } from '../../../utils/formattedText';
import validationSchema from '../../../utils/validationSchema';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Dropdown from '../CustomSelect/CustomSelect';

import s from './MusicForm.module.scss';

const MusicForm = ({ closeForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const song = {
      author: formattedText(values.author),
      composition: formattedText(values.composition),
      genre: values.genre,
      date: values.date,
      id: uuidv4(),
    };
    dispatch({ type: 'songs/createSong', payload: song });
    resetForm();
    closeForm();
  };

  return (
    <div className={s.root}>
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
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Input.propTypes = {
  closeForm: func,
};

export default MusicForm;

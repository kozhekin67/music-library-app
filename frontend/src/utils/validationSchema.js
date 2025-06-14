import * as Yup from 'yup';

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

export default validationSchema;

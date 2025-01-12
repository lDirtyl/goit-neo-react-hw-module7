import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Name can only include letters and spaces')
      .min(3, 'Name must be at least 3 characters long')
      .max(50, 'Name cannot exceed 50 characters')
      .required('Please enter your name'),
    number: Yup.string()
      .matches(/^[\d-]+$/, 'Phone number can only include digits and dashes')
      .min(3, 'Phone number must be at least 3 digits long')
      .max(18, 'Phone number cannot exceed 18 digits')
      .required('Please enter your phone numbe'),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.formContainer}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage
            name="name"
            component="div"
            className={css.errorMessage}
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage
            name="number"
            component="div"
            className={css.errorMessage}
          />
        </div>
        <button type="submit">
          <span>Add contact</span>
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

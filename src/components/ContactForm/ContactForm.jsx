import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const nameSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required').integer(),
});

export const ContactForm = props => {
  return (
    <div className="mb-[20px] border-2 border-black">
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={nameSchema}
        onSubmit={(values, actions) => {
          props.addContacts(values);
          actions.resetForm();
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="name">First Name</label>
          <Field
            className={styles.Field}
            id="name"
            name="name"
            placeholder="Enter Name"
          />

          <label htmlFor="number">Telephone</label>
          <Field
            className={styles.Field}
            id="number"
            name="number"
            placeholder="Enter Telephone"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

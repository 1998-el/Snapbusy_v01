import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import podfond from '../assets/Fond/register.jpg';
import loginStyles from '../styles/Login/Login_style.module.scss';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleBtn';
import ErrorTooltip from '../components/ErrorMessage';

function Register() {
  const [buttonText, setButtonText] = React.useState('Register');
  const [isFetching, setIsFetching] = React.useState(false);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address. Example: user@example.com')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character (e.g., !@#$%^&*)')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('Please confirm your password'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setButtonText('Fetching...');
    setIsFetching(true);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error during fetch:', error);
    } finally {
      setButtonText('Register');
      setIsFetching(false);
      setSubmitting(false);
    }
  };

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.container_fond}>
        <img src={podfond} alt='Background' className={loginStyles.img} />
      </div>
      <div className={loginStyles.form_container}>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={loginStyles.form}>
              <h1 className={loginStyles.title}>Register</h1>

              <div className={loginStyles.name_container}>
                <div className={loginStyles.input_field}>
                  <Field type='text' name='firstname' className={loginStyles.input_name} placeholder=' ' />
                  <label className={loginStyles.label} htmlFor='firstname'>First Name</label>
                  <ErrorMessage name='firstname'>
                    {msg => <ErrorTooltip message={msg} />}
                  </ErrorMessage>
                </div>

                <div className={loginStyles.input_field}>
                  <Field type='text' name='lastname' className={loginStyles.input_name} placeholder=' ' />
                  <label className={loginStyles.label} htmlFor='lastname'>Last Name</label>
                  <ErrorMessage name='lastname'>
                    {msg => <ErrorTooltip message={msg} />}
                  </ErrorMessage>
                </div>
              </div>

              <div className={loginStyles.input_field}>
                <Field type='email' name='email' className={loginStyles.input} placeholder=' ' />
                <label className={loginStyles.label} htmlFor='email'>Email</label>
                <ErrorMessage name='email'>
                  {msg => <ErrorTooltip message={msg} />}
                </ErrorMessage>
              </div>

              <div className={loginStyles.password_container}>
                <div className={loginStyles.input_field}>
                  <Field type='password' name='password' className={loginStyles.input} placeholder=' ' />
                  <label className={loginStyles.label} htmlFor='password'>Password</label>
                  <ErrorMessage name='password'>
                    {msg => <ErrorTooltip message={msg} />}
                  </ErrorMessage>
                </div>
                <div className={loginStyles.input_field}>
                  <Field type='password' name='confirmPassword' className={loginStyles.input} placeholder=' ' />
                  <label className={loginStyles.label} htmlFor='confirmPassword'>Confirm Password</label>
                  <ErrorMessage name='confirmPassword'>
                    {msg => <ErrorTooltip message={msg} />}
                  </ErrorMessage>
                </div>
              </div>

              <div className={loginStyles.password_requirements}>
                <p>Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).</p>
              </div>

              <Button name={buttonText} disabled={isFetching || isSubmitting} />

              <div className={loginStyles.separator}>
                <span className={loginStyles.separator_text}>Or register with Google</span>
              </div>

              <GoogleButton />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
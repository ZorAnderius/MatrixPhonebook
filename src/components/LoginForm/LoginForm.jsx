import { ErrorMessage, Field, Form, Formik } from 'formik';

import loginCSS from './LoginForm.module.css';
import { validateLoginForm } from 'support/validatorForm/loginValidator';

export const LoginForm = ({ login }) => {
  return (
    <div className={loginCSS.login_container}>
      <Formik
        className={loginCSS.login_formik}
        initialValues={{
          email: '',
          password: '',
        }}
        validate={validateLoginForm}
        onSubmit={values => {
          login(values);
        }}
      >
        {formik => {
          const { values, errors, touched, isValid, dirty } = formik;
          return (
            <Form className={loginCSS.login_form}>
              <div className={loginCSS.form_item}>
                <label htmlFor="loginEmail" className={loginCSS.login_label}>
                  Email
                </label>
                <Field
                  id="loginEmail"
                  name="email"
                  className={
                    errors.email && touched.email
                      ? loginCSS.input_login_error
                      : loginCSS.input_login
                  }
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={loginCSS.login_error}
                />
              </div>

              <div className={loginCSS.form_item}>
                <label
                  htmlFor="loginrPassword"
                  className={loginCSS.login_label}
                >
                  Password
                </label>
                <Field
                  id="loginPassword"
                  name="password"
                  className={
                    errors.password && touched.password
                      ? loginCSS.input_login_error
                      : loginCSS.input_login
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={loginCSS.login_error}
                />
              </div>

              <button
                type="submit"
                className={
                  !(dirty && isValid)
                    ? loginCSS.login_form_btn_disabled
                    : loginCSS.login_form_btn
                }
                disabled={!(dirty && isValid)}
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

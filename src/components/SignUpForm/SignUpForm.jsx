import { ErrorMessage, Field, Form, Formik } from 'formik';
import signUpCSS from './SignUpForm.module.css';
import { SignInSchema } from 'support/validatorForm/signIn.validate';

export const SignUpForm = ({ signUp }) => {
  return (
    <div className={signUpCSS.signUp_container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={values => {
          signUp(values);
        }}
        className={signUpCSS.formik_signIn}
      >
        {formik => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <Form className={signUpCSS.signin_form}>
              <div className={signUpCSS.signin_form_item}>
                <label htmlFor="userName" className={signUpCSS.signin_label}>
                  Name
                </label>

                <Field
                  id="userName"
                  name="name"
                  className={signUpCSS.input_signin}
                />
              </div>

              <div className={signUpCSS.signin_form_item}>
                <label htmlFor="userEmail" className={signUpCSS.signin_label}>
                  Email
                </label>
                <Field
                  id="userEmail"
                  name="email"
                  className={
                    errors.email && touched.email
                      ? signUpCSS.input_signin_error
                      : signUpCSS.input_signin
                  }
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={signUpCSS.signin_error}
                />
              </div>

              <div className={signUpCSS.signin_form_item}>
                <label
                  htmlFor="userPassword"
                  className={signUpCSS.signin_label}
                >
                  Password
                </label>
                <Field
                  id="userPassword"
                  name="password"
                  className={
                    errors.password && touched.password
                      ? signUpCSS.input_signin_error
                      : signUpCSS.input_signin
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={signUpCSS.signin_error}
                />
              </div>

              <button
                type="submit"
                className={
                  !(dirty && isValid)
                    ? signUpCSS.signin_form_btn_disabled
                    : signUpCSS.signin_form_btn
                }
                disabled={!(dirty && isValid)}
              >
                Sign Up
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

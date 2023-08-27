import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import phonebookImg from '../../images/phone.jpg';
import signPageCSS from './SignUp.module.css';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/thunks';

const SignUp = () => {
  const dispatch = useDispatch();

  const signUp = value => {
    dispatch(signUpThunk(value));
  };

  return (
    <div className={signPageCSS.signUp_container}>
      <div className={signPageCSS.signUp_tumb}>
        <img
          className={signPageCSS.signUp_img}
          src={phonebookImg}
          alt="phonebook"
        />
      </div>
      <SignUpForm className={signPageCSS.signUp_form} signUp={signUp} />
    </div>
  );
};

export default SignUp;

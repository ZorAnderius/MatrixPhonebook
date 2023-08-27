import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunks';

const Login = () => {
  const dispatch = useDispatch();

  const login = values => {
    dispatch(loginThunk(values));
  };

  return <LoginForm login={login} />;
};

export default Login;

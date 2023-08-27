import { Link, useLocation, useNavigate } from 'react-router-dom';
import homeCSS from './home.module.css';

import { RiLogoutBoxLine } from 'react-icons/ri';

import matrixPhoto from '../../images/pngegg.jpeg';
import Matrix from 'components/Matrix/Matrix';
import {} from 'components/Guards/PublicGuards';
import { useDispatch, useSelector } from 'react-redux';
import { selectisAuth } from 'redux/auth/selectors';
import { PrivateGuard } from 'components/Guards/PrivateGuards';
import { logOutThunk } from 'redux/auth/thunks';

const Home = () => {
  const location = useLocation();
  const isAuth = useSelector(selectisAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    localStorage.removeItem('token');
  };
  return (
    <div className={homeCSS.main_container}>
      {isAuth && (
        <button
          type="button"
          className={homeCSS.home_logout_btn}
          onClick={() => (isAuth ? handleLogOut() : navigate('/login'))}
        >
          <RiLogoutBoxLine className={homeCSS.logout_icon} />
        </button>
      )}
      <div className={homeCSS.home_first_title}>
        <p>CREATE YOUR OWN PHONEBOOK</p>
      </div>
      <div className={homeCSS.container}>
        <img src={matrixPhoto} alt="choose" />
        <div className={homeCSS.btn_wrap}>
          {isAuth ? (
            <div className={homeCSS.contacts_link_wrap}>
              <Link
                className={homeCSS.contacts_link}
                to="contacts"
                state={{ from: location }}
              >
                <PrivateGuard redirectTo="/login">
                  <div className={homeCSS.text}>PHONEBOOK</div>
                </PrivateGuard>
              </Link>
            </div>
          ) : (
            <>
              <Link
                className={homeCSS.linkReg}
                to="register"
                state={{ from: location }}
              >
                <div className={homeCSS.text}>SIGN UP</div>
              </Link>
              <Link
                className={homeCSS.linkLog}
                to="login"
                state={{ from: location }}
              >
                <div className={homeCSS.text}>LOG IN</div>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className={homeCSS.home_second_title}>
        <p>DON'T CHOOSE THE MATRIX, BE AWESOME...</p>
      </div>
      <Matrix />;
    </div>
  );
};

export default Home;

import { Link, useLocation } from 'react-router-dom';
import homeCSS from './home.module.css';

import matrixPhoto from '../../images/pngegg.jpeg';
import Matrix from 'components/Matrix/Matrix';
import {} from 'components/Guards/PublicGuards';
import { useSelector } from 'react-redux';
import { selectisAuth } from 'redux/auth/selectors';
import { PrivateGuard } from 'components/Guards/PrivateGuards';

export const Home = () => {
  const location = useLocation();
  const isAuth = useSelector(selectisAuth);
  return (
    <div className={homeCSS.main_container}>
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
                to="/contacts"
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
                to="/register"
                state={{ from: location }}
              >
                <div className={homeCSS.text}>SIGN UP</div>
              </Link>
              <Link
                className={homeCSS.linkLog}
                to="/login"
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

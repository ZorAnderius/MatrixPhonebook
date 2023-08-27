import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import avatar from '../../images/neo.jpg';

import clsx from 'clsx';

import layoutCSS from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectisAuth } from 'redux/auth/selectors';
import { logOutThunk } from 'redux/auth/thunks';

export const SharedLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuth = useSelector(selectisAuth);
  const isHome = location?.pathname === '/';

  const handleLogOut = () => {
    dispatch(logOutThunk());
    localStorage.removeItem('token');
  };

  return (
    <div>
      {!isHome && (
        <Header>
          <nav className={layoutCSS.navigation}>
            <div className={layoutCSS.content_container}>
              <Link
                className={clsx(
                  layoutCSS.nav_link,
                  location?.pathname === '/' && layoutCSS.active
                )}
                to="/"
              >
                Home
              </Link>
              {isAuth && (
                <Link
                  className={clsx(
                    layoutCSS.nav_link,
                    location?.pathname === '/contacts' && layoutCSS.active
                  )}
                  to="/contacts"
                  state={{ from: location }}
                >
                  Contacts
                </Link>
              )}
            </div>

            <div className={layoutCSS.auth_container}>
              {isAuth && (
                <Link
                  className={clsx(
                    layoutCSS.nav_link,
                    location?.pathname === '/current' && layoutCSS.active
                  )}
                  to="/current"
                  state={{ from: location }}
                >
                  <div className={layoutCSS.avatar_tumb}>
                    <img
                      className={layoutCSS.avatar}
                      src={avatar}
                      alt="userProf"
                    />
                  </div>
                </Link>
              )}

              {!isAuth && (
                <Link
                  className={clsx(
                    layoutCSS.nav_link,
                    location?.pathname === '/register' && layoutCSS.active
                  )}
                  to="/register"
                  state={{ from: location }}
                >
                  SignUp
                </Link>
              )}

              <button
                type="button"
                className={clsx(
                  layoutCSS.nav_btn_link,
                  location?.pathname === '/login' && layoutCSS.active
                )}
                onClick={() => (isAuth ? handleLogOut() : navigate('/login'))}
              >
                {isAuth ? 'logout' : 'Login'}
              </button>
            </div>
          </nav>
        </Header>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

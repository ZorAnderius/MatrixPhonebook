import { Header } from 'components/Header/Header';
import { Suspense, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { RiLogoutBoxLine, RiLoginBoxLine } from 'react-icons/ri';

import clsx from 'clsx';

import avatar from '../../images/neo.jpg';

import layoutCSS from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectisAuth } from 'redux/auth/selectors';
import { logOutThunk } from 'redux/auth/thunks';
import { Modal } from 'components/Modal/Modal';
import { User } from 'components/UserProfile/User';
import { AiOutlineClose } from 'react-icons/ai';

export const SharedLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuth = useSelector(selectisAuth);
  const isHome = location?.pathname === '/';

  const handleLogOut = () => {
    dispatch(logOutThunk());
    localStorage.removeItem('token');
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
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
                  location.pathname === '/' && layoutCSS.active
                )}
                to="/"
              >
                Home
              </Link>
              {isAuth && (
                <Link
                  className={clsx(
                    layoutCSS.nav_link,
                    location.pathname === '/contacts' && layoutCSS.active
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
                <button
                  type="button"
                  className={layoutCSS.user_btn}
                  onClick={toggleModal}
                >
                  <div
                    className={clsx(
                      layoutCSS.nav_link,
                      location.pathname === '/register' && layoutCSS.active
                    )}
                  >
                    <div className={layoutCSS.avatar_tumb}>
                      <img
                        className={layoutCSS.avatar}
                        src={avatar}
                        alt="userProfile"
                      />
                    </div>
                  </div>
                </button>
              )}

              {!isAuth && (
                <Link
                  className={clsx(
                    layoutCSS.nav_link,
                    location.pathname === '/register' && layoutCSS.active
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
                  location.pathname === '/login' && layoutCSS.active
                )}
                onClick={() => (isAuth ? handleLogOut() : navigate('/login'))}
              >
                {isAuth ? <RiLogoutBoxLine /> : <RiLoginBoxLine />}
              </button>
            </div>
          </nav>
        </Header>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <User />
          <button
            className={layoutCSS.close_btn}
            type="button"
            onClick={toggleModal}
          >
            <AiOutlineClose className={layoutCSS.close_icon} />
          </button>
        </Modal>
      )}
    </div>
  );
};

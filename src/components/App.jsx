import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateGuard } from './Guards/PrivateGuards';
import { PublicGuards } from './Guards/PublicGuards';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { lazy, useEffect } from 'react';
import { refreshThunk } from 'redux/auth/thunks';

const Home = lazy(() => import('../pages/Home/home'));
const Contacts = lazy(() => import('../pages/Contacts/contacts'));
const Login = lazy(() => import('../pages/Login/login'));
const SignUp = lazy(() => import('../pages/SignUp/signUp'));
const ErrorPage = lazy(() => import('../pages/ErrorPage/error'));

export const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && dispatch(refreshThunk());
  }, [dispatch]);

  return (
    !isRefresh && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateGuard redirectTo="/login">
                <Contacts />
              </PrivateGuard>
            }
          />
          <Route
            path="login"
            element={
              <PublicGuards redirectTo="/contacts">
                <Login />
              </PublicGuards>
            }
          />
          <Route
            path="register"
            element={
              <PublicGuards redirectTo="/login">
                <SignUp />
              </PublicGuards>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    )
  );
};

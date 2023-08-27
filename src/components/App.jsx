import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from '../pages/Home/home';
import { Contacts } from '../pages/Contacts/contacts';
import { Login } from '../pages/Login/login';
import { SignUp } from '../pages/SignUp/signUp';
import { UserProfile } from '../pages/UserProfile/userProfile';
import { Error } from '../pages/ErrorPage/error';
import { PrivateGuard } from './Guards/PrivateGuards';
import { PublicGuards } from './Guards/PublicGuards';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/thunks';

export const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    !isRefresh && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateGuard redirectTo="/login">
                <Contacts />
              </PrivateGuard>
            }
          />
          <Route
            path="/login"
            element={
              <PublicGuards redirectTo="/contacts">
                <Login />
              </PublicGuards>
            }
          />
          <Route
            path="/register"
            element={
              <PublicGuards redirectTo="/login">
                <SignUp />
              </PublicGuards>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    )
  );
};

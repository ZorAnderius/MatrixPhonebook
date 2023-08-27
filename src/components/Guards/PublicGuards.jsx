import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicGuards = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log('isL', isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

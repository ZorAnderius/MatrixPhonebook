import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectisAuth } from 'redux/auth/selectors';

export const PublicGuards = ({ children, redirectTo = '/' }) => {
  const isAuth = useSelector(selectisAuth);

  return isAuth ? <Navigate to={redirectTo} /> : children;
};

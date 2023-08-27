import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsRefresh, selectisAuth } from 'redux/auth/selectors';

export const PrivateGuard = ({ children, redirectTo = '/' }) => {
  const location = useLocation();
  const isAuth = useSelector(selectisAuth);
  const isRefreshing = useSelector(selectIsRefresh);

  const shouldRedirect = !isAuth && !isRefreshing;
  return shouldRedirect ? (
    <Navigate to={redirectTo} state={location} />
  ) : (
    children
  );
};

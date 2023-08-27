import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefresh } from 'redux/auth/selectors';

export const PrivateGuard = ({ children, redirectTo = '/' }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? (
    <Navigate to={redirectTo} state={location} />
  ) : (
    children
  );
};

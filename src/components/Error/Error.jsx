import { useSelector } from 'react-redux';
import errorCSS from './Error.module.css';
import propTypes from 'prop-types';
import { errorSelect } from 'redux/errorLoader/selector';

export const Error = () => {
  const error = useSelector(errorSelect);
  return <div className={errorCSS.error}>{error}</div>;
};

Error.propTypes = {
  error: propTypes.string.isRequired,
};

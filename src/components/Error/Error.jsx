import errorCSS from './Error.module.css';
import propTypes from 'prop-types';

export const Error = ({ error }) => {
  return <div className={errorCSS.error}>{error}</div>;
};

Error.propTypes = {
  error: propTypes.string.isRequired,
};

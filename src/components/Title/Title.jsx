import titleCSS from './Title.module.css';
import propTypes from 'prop-types';

export const Title = ({ title, title_style }) => {
  return <p className={titleCSS[title_style]}>{title}</p>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
  title_style: propTypes.string,
};

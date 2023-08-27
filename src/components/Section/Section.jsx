import { Title } from 'components/Title/Title';
import propTypes from 'prop-types';
import sectionCSS from './Section.module.css';

export const Section = ({ title, styles, children }) => {
  return (
    <div className={sectionCSS[styles.container]}>
      <Title title={title} title_style={styles.title} />
      {children}
    </div>
  );
};

Section.propTypes = {
  styles: propTypes.shape({
    container: propTypes.string,
  }),
  children: propTypes.any.isRequired,
};

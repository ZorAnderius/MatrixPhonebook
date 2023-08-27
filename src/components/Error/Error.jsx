import { useSelector } from 'react-redux';
import errorCSS from './Error.module.css';
import { errorSelect } from 'redux/errorLoader/selector';
import { Link } from 'react-router-dom';

export const Error = () => {
  const error = useSelector(errorSelect);

  return (
    <div className={errorCSS.error_container}>
      <div className={errorCSS.error}>{error}</div>
      <Link className={errorCSS.link_btn} to={'/contacts'}>
        <button type="button" className={errorCSS.back_btn}>
          Back
        </button>
      </Link>
    </div>
  );
};

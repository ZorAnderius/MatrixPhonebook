import LoaderCSS from './Loader.module.css';
import { CirclesWithBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={LoaderCSS.loader_wraper}>
      <div className={LoaderCSS.container}>
        <CirclesWithBar
          height="200"
          width="200"
          color="rgb(98, 98, 133)"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    </div>
  );
};

import userCSS from './User.module.css';
import avatar from '../../images/neo.jpg';
import { useSelector } from 'react-redux';
import { selectProfile } from 'redux/auth/selectors';

export const User = () => {
  const { name, email } = useSelector(selectProfile);
  return (
    <div className={userCSS.user_container}>
      <div className={userCSS.user_avatar_tumb}>
        <img className={userCSS.user_avatar} src={avatar} alt="userProf" />
      </div>
      <div className={userCSS.user_details_container}>
        <div className={userCSS.user_details_wrap}>
          <div className={userCSS.user_title}>Name: </div>
          <div className={userCSS.user_value}>{name}</div>
        </div>
        <div className={userCSS.user_details_wrap}>
          <div className={userCSS.user_title}>Email: </div>
          <div className={userCSS.user_value}>{email}</div>
        </div>
      </div>
    </div>
  );
};

import { Notification } from 'components/Notification/Notification';
import contactListCSS from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunks';
import propTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const onRemoveContact = contactID => {
    dispatch(deleteContactThunk(contactID));
  };

  const isContactsListEmpty = contacts?.length;
  return isContactsListEmpty ? (
    <ul className={contactListCSS.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={contactListCSS.contact_item}>
          <div className={contactListCSS.contact_text_wrap}>
            <p className={contactListCSS.contact_name}>{name}</p>
            <p className={contactListCSS.contact_number}>{number}</p>
          </div>
          <button
            className={contactListCSS.contact_delete_btn}
            onClick={() => onRemoveContact(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <Notification message="No matches found" />
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.shape).isRequired,
};

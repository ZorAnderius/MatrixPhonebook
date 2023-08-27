import React, { useEffect } from 'react';
import { Section } from '../Section/Section';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

import contactsCSS from './ContactsDetails.module.css';

import { Notification } from '../Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  fetchContactsThunk,
} from '../../redux/contacts/thunks';
import { Loader } from '../Loader/Loader';
import { ScrollUp } from '../ScrollUp/ScrollUp';
import { filterContacts } from 'redux/contacts/selectors';
import { errorSelect, loadingSelect } from 'redux/errorLoader/selector';
import { Navigate } from 'react-router-dom';

export const ContactsDetsils = () => {
  const isLoading = useSelector(loadingSelect);
  const error = useSelector(errorSelect);

  const filterList = useSelector(filterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const addContact = body => {
    const isInclude = filterList.find(
      ({ name }) => name.toLowerCase() === body.name.toLowerCase()
    );

    if (isInclude) {
      alert(
        `Sorry, but the contact ${body.name} is already in your phone book `
      );
    } else {
      dispatch(addContactThunk(body));
    }
  };

  return error ? (
    <Navigate to={'error'} />
  ) : (
    <div className={contactsCSS.main_container}>
      <Section
        title={'Phonebook'}
        styles={{ title: 'phonebook-title', container: 'first-container' }}
      >
        <ContactForm addContact={addContact} />
      </Section>

      <Section
        title={'Contacts'}
        styles={{ title: 'contact-title', container: 'second-container' }}
      >
        <Filter />
        {isLoading ? (
          <Loader />
        ) : filterList?.length ? (
          <ContactList contacts={filterList} />
        ) : (
          <Notification message="Phonebook is empty" />
        )}
      </Section>
      <ScrollUp />
    </div>
  );
};

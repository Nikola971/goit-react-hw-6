
import React from 'react';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectors.selectContacts);
  const filter = useSelector(selectors.selectFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  console.log(filteredContacts);

  return (
    <div>
      <ul className={css.container}>
        {filteredContacts.map(item => {
          return (
            <li key={item.id} className={css.item}>
              <Contact contacts={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

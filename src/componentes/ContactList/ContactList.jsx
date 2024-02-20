import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const filters = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  console.log(contacts);
  return (
    <div className={css.name}>
      <ul className={css.container}>
        {filters.map(item => {
          return (
            <li className={css.list} key={item.id} >
              <Contact contacts={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

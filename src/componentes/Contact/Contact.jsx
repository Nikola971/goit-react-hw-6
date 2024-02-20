import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContacts } from '../../redux/contactsSlice';

export default function Contact({ contacts }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(contacts.id));
  return (
    <div>
      <h2 className={css.text}>
        {contacts.name}
      </h2>
      <p className={css.text}>
        {contacts.number}
      </p>
      <button onClick={handleDelete} className={css.button} type="button">
        Delete
      </button>
    </div>
  );
}

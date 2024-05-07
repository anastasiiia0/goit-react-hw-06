import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors.js';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filters.toLowerCase());
  });

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

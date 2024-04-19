import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  // const search = useSelector(selectNameFilter);
  // const contacts = useSelector(selectContacts);
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}

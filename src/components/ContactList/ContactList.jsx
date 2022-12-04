import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from 'redux/flterSlice';
import { Item } from '../Item/Item';
import { List, ContactItem } from './ContactList.styled';

export const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts).contacts;
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));

  const contactsFilter = () => {
    const filterNormalize = filterValue.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize));
   
  };
  const filteredContacts = contactsFilter();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <Item
              name={name}
              number={number}
              deleteContact={() => deleteSelectedContact(id)}
              ItemID={id} />
          </ContactItem>
        );
      })}
    </List>
  );

};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  // deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
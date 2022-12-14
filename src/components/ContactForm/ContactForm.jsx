import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts , addContact} from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

import { NameLable, SubmitForm, Input, FormWrapper } from './ContactForm.styled';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts).contacts;
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onSubmitForm = event => {
        event.preventDefault();

        addNewContact({ name, number });
        setName('');
        setNumber('');
        
    };

    const addNewContact = ({ name, number }) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        };
         
        checkContact(newContact);

    };

    const checkContact = newContact => {
        if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            alert(`You have this contact in your phonebook`);
            return;
        }

        dispatch(addContact(newContact));
    };

    const handleChange = event => {
        event.currentTarget.type === 'text' ?
            setName(event.currentTarget.value) :
            setNumber(event.currentTarget.value);
    }

        return (
            <FormWrapper onSubmit={onSubmitForm}>
                <NameLable>Name
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange ={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </NameLable>
                <NameLable>Number
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        onChange ={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </NameLable>
                <SubmitForm type="submit" name="Add contact">Add contact</SubmitForm>
            </FormWrapper>
        );
    };
        
    


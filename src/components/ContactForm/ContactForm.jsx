import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import { NameLable, SubmitForm, Input, FormWrapper } from './ContactForm.styled';

export const ContactForm = () => {
    const dispatch = useDispatch();

    const onSubmitForm = event => {
        event.preventDefault();
        const form = event.target;
        dispatch(addContact(form.elements.name.value, form.elements.number.value));
        form.reset();
    };

        return (
            <FormWrapper onSubmit={onSubmitForm}>
                <NameLable>Name
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </NameLable>
                <NameLable>Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </NameLable>
                <SubmitForm type="submit" name="Add contact">Add contact</SubmitForm>
            </FormWrapper>
        );
    };
        
    


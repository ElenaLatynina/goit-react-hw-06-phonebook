import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import {Formik,ErrorMessage} from 'formik';
import * as yup from 'yup';
import { NameLable, SubmitForm, Input, Error, Wrapper } from './ContactForm.styled';

const initialValues=  {
        name: '',
        number: ''
};
    
const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

const NameInputId = nanoid();
const NumberInputId = nanoid();

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeName = event => setName(event.currentTarget.value);
    const onChangeNumber = event => setNumber(event.currentTarget.value);

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const onSubmitForm = event => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            name,
            number,
        };

        if (!contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) { dispatch(addContact(newContact)) }
        else { <ErrorMessage name="number" render={msg => <Error>{`You have this user in your contact list`}</Error>} /> }
        
        resetForm();

    };

    const resetForm = () => {
    setName('');
    setNumber('');
  };

     return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmitForm}>
                <Wrapper>
                    <NameLable htmlFor={NameInputId}>Name</NameLable>
                     <Input
                        onChange={onChangeName}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        id={NameInputId}
                    />
                    <ErrorMessage name="name" render={msg => <Error>{`Please, enter Name`}</Error>} />
                    <NameLable htmlFor={NumberInputId}>Number</NameLable>
                     <Input
                        onChange={onChangeNumber}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        id={NumberInputId}
                    />
                    <ErrorMessage name="number" render={msg => <Error>{`Please, enter Number`}</Error>} />
                    <SubmitForm type="submit" name="Add contact">Add contact</SubmitForm>
                </Wrapper>
            </Formik>
        </div>
    );
};

export default ContactForm;



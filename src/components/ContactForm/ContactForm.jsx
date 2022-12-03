import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import {ErrorMessage, Formik} from 'formik';
import * as yup from 'yup';
import { Wrapper, NameLable, SubmitForm, Input, Error } from './ContactForm.styled';

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

    const onChangeName = event => setName(event.currentTarget.values);
    const onChangeNumber = event => setNumber(event.currentTarget.values);

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
        else { <Error>{`You have this user in your contact list`}</Error> }
        
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
                        type="text"
                        name="name"
                        value = {name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // id={NameInputId}
                        onChange={onChangeName}
                    />
                    <ErrorMessage name="name" render={msg => <Error>{`Please, enter Name`}</Error>} />
                    <NameLable htmlFor={NumberInputId}>Number</NameLable>
                    <Input
                        type="tel"
                        name="number"
                        value = {number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={onChangeNumber}
                        // id={NumberInputId}
                    />
                    <ErrorMessage name="number" render={msg => <Error>{`Please, enter Number`}</Error>} />
                    <SubmitForm type="submit" name="Add contact">Add contact</SubmitForm>
                </Wrapper>
            </Formik>
        </div>
    );
};

export default ContactForm;



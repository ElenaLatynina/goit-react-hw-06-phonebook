import PropTypes from 'prop-types';
import { ContactField, DataContact, Button } from './Item.styled';

export const Item = ({ name, number, deleteContact }) => {
    return (
        <>
            <ContactField>
            <DataContact>{name}</DataContact>
            <DataContact>{number}</DataContact>
            <Button type="button" onClick={deleteContact}></Button>
            </ContactField>
        </>
    );
};

Item.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
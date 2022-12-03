import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';
import { NameInput, NameLable, ContactBook } from './Filter.styled';

export const Filter = () => {
  const contactsFilter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldValue = event => dispatch(changeFilter(event.currentTarget.value));
   
  return (
    <ContactBook>
      <NameLable>
        Find contact by Name 
        <NameInput
          type="text"
          name="search"
          value={contactsFilter}
          onChange={changeFieldValue}
        ></NameInput>
      </NameLable>
    </ContactBook>
  );
  };
  


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Filter;

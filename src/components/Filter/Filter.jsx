// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, filterContact } from 'redux/flterSlice';
import { NameInput, NameLable, ContactBook } from './Filter.styled';

export const Filter = () => {
  
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFieldValue = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <ContactBook>
      <NameLable>
        Find contact by Name 
        <NameInput
          type="text"
          name="search"
          value={filter}
          onChange={changeFieldValue}
        ></NameInput>
      </NameLable>
    </ContactBook>
  );
  };
  


// Filter.prototype = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

export default Filter;

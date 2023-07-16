import { filterContacts } from 'redux/filter/sliceFilter';
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
  };

  return (
    <InputGroup mb='8'>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="text"
        onChange={changeFilter}
        value={filter}
        name="filter"
        placeholder="Find contacts by name"
      />
    </InputGroup>
  );
};

export default Filter;

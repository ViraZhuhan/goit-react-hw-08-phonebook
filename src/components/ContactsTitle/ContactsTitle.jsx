import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

const ContactsTitle =({title}) => {
  return <Text as='b' fontSize='2xl' color='gray.600' >{title}</Text>;
}

ContactsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContactsTitle;

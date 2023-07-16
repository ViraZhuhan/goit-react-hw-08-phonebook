import PropTypes from 'prop-types';
import { Center, Heading } from '@chakra-ui/react';

const Title = ({ title }) => {
  return (
    <Center h='100px' color='grey.300'>
      <Heading as='h2' size='lg' color='gray.600'>{title}</Heading>
  </Center>
  )
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
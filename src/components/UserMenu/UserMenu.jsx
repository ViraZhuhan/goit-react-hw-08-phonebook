import { useDispatch } from 'react-redux';
import { Avatar, Button, Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operationsAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex gap={6} justify="center" align="center">
      <Avatar size="sm" name={user.name} src="https://bit.ly/broken-link" />
      <Button
        colorScheme="messenger"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default UserMenu;

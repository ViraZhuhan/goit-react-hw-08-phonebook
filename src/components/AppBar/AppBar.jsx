import { Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex justify="space-between" align="center" mb={12}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};

export default AppBar;

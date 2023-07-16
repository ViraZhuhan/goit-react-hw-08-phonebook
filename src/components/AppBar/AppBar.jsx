import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import { useAuth } from 'hooks';
import { Flex } from '@chakra-ui/react';

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

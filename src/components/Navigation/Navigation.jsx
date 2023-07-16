import { Link } from 'react-router-dom';
import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (

    <Tabs size='md'>
      <TabList>
         <Tab as={Link} to="/"> 
        Home
      </Tab>
      {isLoggedIn && (
        <Tab as={Link} to="/contacts">Contacts
        </Tab>
      )}
      </TabList>
      <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    </Tabs>
)}

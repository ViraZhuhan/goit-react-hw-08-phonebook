import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectorsContacts';
import ContactsList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
   const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
            <Filter />
      <ContactsList />
  
    </>
  );
}

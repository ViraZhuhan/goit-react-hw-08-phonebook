import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operationsContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';

export default function ContactsList() {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const filter = useSelector(state => state.filter);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    onClose();
  };

  return (
    <Accordion allowMultiple>
      {getVisibleContacts().map(({ name, number, id }) => (
        <AccordionItem key={id}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {name}
            </Box>
            <AccordionIcon />
            <Button onClick={onOpen} colorScheme="red" size="md">
              <DeleteIcon />
            </Button>
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Delete contact
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    Are you sure? You can't undo this action afterwards.
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => onDeleteContact(id)}
                      ml={3}
                    >
                      Delete
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </AccordionButton>
          <AccordionPanel pb={6}>{number}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

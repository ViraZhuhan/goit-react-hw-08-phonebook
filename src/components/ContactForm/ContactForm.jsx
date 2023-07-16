import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import { TiUser } from 'react-icons/ti';

import ContactsTitle from 'components/ContactsTitle/ContactsTitle';
import { addContact } from 'redux/contacts/operationsContacts';
import { selectContacts } from 'redux/contacts/selectorsContacts';


export default function ContactForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const toast = useToast();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isFindName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindName) {
      toast({
        title: `${name} is already in contacts !`,
        status: 'error',
        duration: 3000,
        position: 'top-center',
        isClosable: true,
      });
      return;
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
      reset();
      onClose();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Flex gap={10} justify='start' align='end' mb={8}>
        <ContactsTitle title="My Contacts" />
        <Button onClick={onOpen} colorScheme="messenger">
          <AddIcon boxSize={4} />
        </Button>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <InputGroup mb={6}>
                <InputLeftElement pointerEvents="none">
                  <TiUser color="gray.300" />
                </InputLeftElement>
                <Input
                  size="md"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name"
                  onChange={handleChange}
                  id={nameInputId}
                  pattern="^[A-z-А-я\s]+$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </InputGroup>

              <InputGroup mb={6}>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon />
                </InputLeftElement>
                <Input
                  type="tel"
                  placeholder="Phone number"
                  size="md"
                  name="number"
                  value={number}
                  onChange={handleChange}
                  id={numberInputId}
                  pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </InputGroup>

              <Flex justify='flex-end' gap={6}>
                <Button type="submit" colorScheme="messenger" size="md">
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

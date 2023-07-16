import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  FormLabel,
  Center,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { selectIsLoginError } from 'redux/auth/selectorsAuth';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const isLoginError = useSelector(selectIsLoginError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    isLoginError &&
      toast({
        title: `User already exists`,
        status: 'error',
        duration: 3000,
        position: 'top-center',
        isClosable: true,
      });
  }, [isLoginError]);

  return (
      <Center>
        <Form
          onSubmit={handleSubmit}
          autoComplete="on"
        >
          <FormLabel>
            Username
            <Input size="md" type="text" name="name" required />
          </FormLabel>
          <FormLabel>
            Email
            <Input
              size="md"
              type="email"
              name="email"
              pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              required
            />
          </FormLabel>
          <FormLabel>
            Password
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                name="password"
                required
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormLabel>
          <Button type="submit" colorScheme="messenger" size="md">
            Register
          </Button>
        </Form>
      </Center>
  );
};

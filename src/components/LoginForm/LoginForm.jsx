import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  FormLabel,
  Center
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { selectIsLoginError } from 'redux/auth/selectorsAuth';
import { Form } from 'components/RegisterForm/RegisterForm.styled';


 const LoginForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const isLoginError = useSelector(selectIsLoginError);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
   dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  }

  useEffect(() => {
    isLoginError && toast({
      title: `Incorrect e-mail or password`,
      status: 'error',
      duration: 3000,
      position: 'top-center',
      isClosable: true,
    });
  },[isLoginError]);

  return (
    <Center >
<Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Email
        <Input size="md" type="email" name="email" required />
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
      <Button type='submit' colorScheme='messenger' size='md'>Log In</Button>
    </Form>
    </Center>
  );
};


export default LoginForm;
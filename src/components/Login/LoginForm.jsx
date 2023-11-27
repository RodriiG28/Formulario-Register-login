// LoginForm.jsx
import React, { useState } from 'react';
import {
  VStack,
  Box,
  Input,
  Button,
  Alert,
  FormControl,
  FormLabel,
  Checkbox,
  HStack,
  Heading,
  Text,
  Collapse,
  Link,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useLoginForm from '../LoginLogic/UseLoginForm';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const LoginForm = () => {
  const { handleSubmit, handleChange, errors, loginError, loginSuccess, email, password } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const renderFormControl = (name, label, type = 'text') => (
    <FormControl mb={3}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          borderRadius="md"
          variant="filled"
          type={type}
          name={name}
          onChange={handleChange}
          placeholder={label}
          bg="gray.100"
          _hover={{ bg: 'gray.200' }}
          _focus={{ bg: 'teal.100' }}
          _placeholder={{ color: 'gray.500' }}
        />
        {name === 'password' && (
          <InputRightElement width="3rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
              variant="unstyled"
            >
              {showPassword ? <FiEyeOff color="teal" /> : <FiEye color="teal" />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <Collapse in={!!errors[name]}>
        <Alert status="error" mt={2} color="red.500" borderRadius={0} background="none" textAlign="center">
          <Text>{name === 'email' ? 'El correo electrónico debe ser válido' : errors[name]}</Text>
        </Alert>
      </Collapse>
    </FormControl>
  );

  return (
    <Box
      w={['full', 'md', 'sm']}
      p={[6, 8, 10]}
      m={[8, '10vh']}
      mx="auto"
      maxW="sm"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      bg="white"
      color="black"
    >
      <VStack spacing={4} align={['flex-start', 'center']} w="full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={2} align={['flex-start', 'center']} w="full">
            <Heading color="teal.500" mb="5">
              Iniciar Sesión
            </Heading>
            <Text color="gray.500" textAlign={['center', 'flex-start']} mb="5">
              Ingrese su correo electrónico y contraseña para iniciar sesión
            </Text>
          </VStack>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            {renderFormControl('email', 'Email', 'email')}
            {renderFormControl('password', 'Contraseña', showPassword ? 'text' : 'password')}

            <HStack mt={3} w="full" justifyContent="space-between">
              <Checkbox
                colorScheme="teal"
                size="md"
                borderColor={rememberMe ? 'teal.500' : 'black'}
                _hover={{ bg: 'white' }}
                onChange={() => setRememberMe(!rememberMe)}
              >
                Recordarme
              </Checkbox>
              <Link color="teal.500" onClick={() => alert(`Contraseña ingresada: ${password}`)}>
                Olvidé mi Contraseña
              </Link>
            </HStack>

            <Button
              borderRadius="md"
              colorScheme="teal"
              w={['full', 'auto']}
              alignSelf="center"
              type="submit"
              mt={4}
            >
              Iniciar Sesión
            </Button>

            <Collapse in={loginError} animateOpacity>
              <Alert
                status="error"
                mt={4}
                color="red.500"
                borderRadius={0}
                background="none"
                textAlign="center"
              >
                <Text>Error en el inicio de sesión. Verifica tus datos ingresados.</Text>
              </Alert>
            </Collapse>

            <Collapse in={loginSuccess} animateOpacity>
              <Alert
                status="success"
                mt={4}
                color="green.500"
                borderRadius={0}
                background="none"
                textAlign="center"
              >
                <Text>¡Inicio de sesión exitoso! Redirigiendo...</Text>
              </Alert>
            </Collapse>
          </form>
        </motion.div>
      </VStack>
    </Box>
  );
};

export default LoginForm;

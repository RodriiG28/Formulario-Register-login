import React, { useState } from "react";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import LoginForm from "./Login/LoginForm";
import FormRegister from "./Register/FormRegister";
import Navbar from "./Nav/Nav";
import Footer from "./Footer/Footer";

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        '.error-text': {
          color: 'red.500',
          fontSize: 'sm',
          fontWeight: 'semibold',
        }
        ,
      },
    },
  },
});

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex direction="column" minHeight="100vh">
        <Navbar />
        <Flex flexGrow={1} justifyContent="center" alignItems="center" flexDirection="column" textAlign="center" p={[4, 8]}>
          {isRegistered ? <LoginForm /> : <FormRegister onRegisterSuccess={handleRegisterSuccess} />}
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
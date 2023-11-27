import React, { useState } from 'react';
import {
  Flex,
  Text,
  Button,
  Image,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const Navbar = () => {
  const [ayudaModalOpen, setAyudaModalOpen] = useState(false);
  const [contactoModalOpen, setContactoModalOpen] = useState(false);

  const openAyudaModal = () => setAyudaModalOpen(true);
  const closeAyudaModal = () => setAyudaModalOpen(false);

  const openContactoModal = () => setContactoModalOpen(true);
  const closeContactoModal = () => setContactoModalOpen(false);

  const navigateToInicio = () => {
    window.location.href = '/';
  };

  return (
    <Flex
      p={4}
      bg="teal.500"
      color="white"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent={{ base: 'center', md: 'space-between' }}
    >
      <Stack
        direction={{ base: 'row', md: 'row' }}
        spacing={2}
        alignItems="center"
      >
        <Image
          src="img/logo1 (1).png"
          alt="Logo"
          boxSize={['3rem', '5rem']}
          onClick={navigateToInicio}
          cursor='pointer'
        />
        <Text
          fontSize={['md', 'xl']}
          fontWeight="bold"
          alignSelf="center"
          fontFamily="serif"
          fontStyle="italic"
          mb="10px"
        >
          Ecompre
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ base: 'center', md: 'center' }}
        justifyContent="center"
      >
        <Button variant='solid' size={['md', 'lg']} onClick={navigateToInicio}>
          Inicio
        </Button>
        <Button variant='ghost' size={['md', 'lg']} onClick={openAyudaModal}>
          Ayuda
        </Button>
        <Button variant='ghost' size={['md', 'lg']} onClick={openContactoModal}>
          Contacto
        </Button>
      </Stack>

      {/* Modal de Ayuda */}
      <Modal isOpen={ayudaModalOpen} onClose={closeAyudaModal} size="md">
        {/* Resto del código del modal ... */}
      </Modal>

      {/* Modal de Contacto */}
      <Modal isOpen={contactoModalOpen} onClose={closeContactoModal} size="md">
        {/* Resto del código del modal ... */}
      </Modal>
    </Flex>
  );
};

export default Navbar;

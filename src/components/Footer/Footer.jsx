import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  const estiloFooter = {
    height: '100px',
    backgroundColor: 'teal.500',
    color: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  return (
    <Flex {...estiloFooter}>
      <Flex mt='1.5rem' flexWrap='wrap'>
        <Text mb={{ base: 4, md: 0 }} textAlign="center" width="100%">
          <Link href="https://github.com/RodriiG28/Clase-3-UTN-4.0" target="_blank" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
            Trabaja con nosotros
          </Link>
          <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
            Ayuda
          </Link>
          <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
            Preguntas frecuentes
          </Link>
          <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
            Medios de pago
          </Link>
          <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
            Políticas de privacidad
          </Link>
          <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
            Términos y condiciones
          </Link>
        </Text>
      </Flex>
      <Text textAlign="center" width="100%">
        © 2023 <Text as="span" fontWeight="bold">Ecompre</Text> - Rodrigo Avila.
      </Text>
    </Flex>
  );
};

export default Footer;

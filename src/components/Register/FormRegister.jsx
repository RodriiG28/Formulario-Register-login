import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { motion } from 'framer-motion';
import RegisterFormLogic from '../RegisterLogic/RegisterFormLogic';
import {
    VStack,
    Box,
    Button,
    Alert,
    FormControl,
    FormLabel,
    Text,
    Heading,
    Checkbox,
    HStack,
    Collapse,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';

// Mueve la definición del componente TerminosModal fuera de la función principal
const TerminosModal = ({ isOpen, onClose }) => {
    const terminosContenido = (

        <Text>
            <strong>Términos y Condiciones de Uso de Ecompre</strong>

            <br />
            <br />

            <Text>
                Bienvenido/a a Ecompre. Estos términos y condiciones ("Términos") rigen tu uso de nuestro servicio y cualquier aplicación, herramienta, o plataforma relacionada (colectivamente referidos como el "Servicio"). Al acceder o utilizar nuestro Servicio, aceptas estos Términos y te comprometes a cumplir con ellos. Si no estás de acuerdo con algún aspecto de estos Términos, te recomendamos que no utilices nuestro Servicio.
            </Text>


            <br />
            <br />

            <strong>1. Uso del Servicio</strong>

            <br />
            <br />

            <strong>1.1. Registro:</strong> Para acceder a ciertas funciones del Servicio, es posible que debas registrarte y proporcionar información precisa y completa durante el proceso de registro. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.

            <br />

            <strong>1.2. Contenido del Usuario:</strong> Al utilizar nuestro Servicio, puedes proporcionar ciertos contenidos, como texto, imágenes, comentarios, etc. Eres el único responsable de cualquier contenido que proporciones, y aceptas que no violarás ninguna ley ni los derechos de terceros al hacerlo.

            <br />
            <br />

            <strong>2. Términos Específicos del Usuario</strong>

            <br />
            <br />

            <strong>2.1. Privacidad:</strong> Entiendes y aceptas nuestra Política de Privacidad, que describe cómo recopilamos, usamos y compartimos tu información.

            <br />

            <strong>2.2. Conducta del Usuario:</strong> No debes utilizar el Servicio para cualquier propósito ilegal o no autorizado, ni infringir las leyes en tu jurisdicción.

            <br />
            <br />

            <strong>3. Modificaciones</strong>

            <br />
            <br />

            Nos reservamos el derecho de modificar o discontinuar el Servicio en cualquier momento sin previo aviso. Estas modificaciones pueden incluir cambios en las funciones, tarifas, requisitos para el acceso o cualquier otro aspecto del Servicio.

            <br />
            <br />

            <strong>4. Exclusión de Garantías</strong>

            <br />
            <br />

            El Servicio se proporciona "tal cual", sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que el Servicio sea seguro, libre de errores o esté disponible en todo momento.

            <br />
            <br />

            <strong>5. Limitación de Responsabilidad</strong>

            <br />
            <br />

            En ningún caso seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, ni por pérdidas de beneficios, ingresos, datos o uso, incurridos por ti o cualquier tercero, ya sea en una acción contractual o extracontractual, incluso si hemos sido informados de la posibilidad de tales daños.

            <br />
            <br />

            <strong>6. Ley Aplicable</strong>

            <br />
            <br />

            Estos Términos se regirán e interpretarán de acuerdo con las leyes de la Ciudad Autónoma de Buenos Aires, República Argentina. Cualquier disputa que surja bajo estos Términos será resuelta por los tribunales de la Ciudad Autónoma de Buenos Aires.
        </Text>
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered scrollBehavior="inside" motionPreset="scale">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader pb={0}>Términos y condiciones</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{terminosContenido}</ModalBody>

                <ModalFooter>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                            bg="#112132"
                            color="#aaccee"
                            onClick={onClose}
                            _hover={{ bg: '#aaccee', color: '#112132' }}
                        >
                            Cerrar
                        </Button>
                    </motion.div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

const FormRegister = ({ onRegisterSuccess }) => {
    const { formik } = RegisterFormLogic({ onRegisterSuccess });
    const [redirecting, setRedirecting] = useState(false);
    const [terminosModalOpen, setTerminosModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const redirectToLogin = () => {
        // ...
    };

    const renderFormControl = (name, label, type = 'text') => (
        <FormControl mb={3}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                <Input
                    borderRadius="md"
                    variant="filled"
                    type={name === 'password' ? (showPassword ? 'text' : 'password') : type}
                    name={name}
                    onChange={formik.handleChange}
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
            <Collapse in={!!formik.errors[name]}>
                <Alert status="error" mt={2} color="red.500" borderRadius={0} background="none" textAlign="center">
                    <Text>{name === 'email' ? 'El correo electrónico debe ser válido' : formik.errors[name]}</Text>
                </Alert>
            </Collapse>
        </FormControl>
    );

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        // Verificar si se aceptaron los términos y condiciones
        if (!formik.values.terminos) {
            // Mostrar el modal de términos y condiciones
            setTerminosModalOpen(true);
            return;
        }

        // Si se aceptaron los términos, proceder con el registro
        formik.handleSubmit(e);

        // Establecer el estado para redirigir después de mostrar el mensaje de éxito
        setRedirecting(true);
    };

    return (
        <Box
            w={['full', 'md', 'sm']}
            p={[6, 8, 10]}
            m={[8, 8, '0vh']} 
            mx="auto"
            maxW="sm"
            border={['none', '1px']}
            borderColor={['', 'gray.200']}
            borderRadius={10}
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
                            Registro
                        </Heading>
                    </VStack>

                    <form onSubmit={handleRegisterSubmit} style={{ width: '100%' }}>
                        {renderFormControl('nombre', 'Nombre')}
                        {renderFormControl('apellido', 'Apellido')}
                        {renderFormControl('email', 'Email', 'email')}
                        {renderFormControl('telefono', 'Teléfono')}
                        {renderFormControl('password', 'Contraseña', 'password')}
                        {renderFormControl('confirmarPassword', 'Confirmar Contraseña', 'password')}

                        <HStack mt={3} w="full" justifyContent="space-between">
                            <Checkbox
                                colorScheme="teal"
                                size="md"
                                borderColor={(!formik.values.terminos && formik.touched.terminos && formik.submitCount > 0) ? "red.500" : "black"}
                                _hover={{ bg: 'transparent' }}
                                onChange={formik.handleChange}
                                onBlur={() => formik.setFieldTouched('terminos', true)}
                                value={formik.values.terminos}
                                name="terminos"
                            >
                                Acepto los términos y condiciones
                            </Checkbox>
                        </HStack>

                        <Alert
                            status="error"
                            mt={2}
                            color="red.500"
                            borderRadius={0}
                            background="none"
                            textAlign="center"
                            display={!formik.values.terminos && formik.touched.terminos && formik.submitCount > 0 ? 'block' : 'none'}
                        >
                            <Text fontSize="sm">Debe aceptar los términos y condiciones</Text>
                        </Alert>

                        <Link color="teal.500" onClick={() => setTerminosModalOpen(true)}>
                            Ver términos
                        </Link>

                        <Button colorScheme="teal" mt={6} w="100%" type="submit" borderRadius={10}>
                            Registrarse
                        </Button>

                        <Collapse in={formik.submitCount > 0 && formik.isValid && redirecting}>
                            <Alert
                                status="success"
                                mt={4}
                                color="green.500"
                                borderRadius={0}
                                background="none"
                                textAlign="center"
                                maxH="100px"
                                overflowY="auto"
                            >
                                <Text fontSize="sm">Registro exitoso. Redirigiendo...</Text>
                            </Alert>
                        </Collapse>
                    </form>
                </motion.div>
            </VStack>

            {/* Modal de Términos y Condiciones */}
            <TerminosModal isOpen={terminosModalOpen} onClose={() => setTerminosModalOpen(false)} />
        </Box>
    );
};

export default FormRegister;

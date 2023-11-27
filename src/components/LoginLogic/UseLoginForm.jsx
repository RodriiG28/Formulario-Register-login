import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const submitForm = async (values) => {
    try {
      // Obtener la información del usuario registrado del almacenamiento local
      const storedUserData = JSON.parse(localStorage.getItem('userData'));

      // Verificar si el email y la contraseña coinciden con los datos almacenados
      if (storedUserData && values.email === storedUserData.email && values.password === storedUserData.password) {
        setLoginError(false);
        setLoginSuccess(true);

        // Redirigir después de 5 segundos
        setTimeout(() => {
          window.location.href = 'https://rodriig28.github.io/Clase-3-UTN-4.0/';
        }, 1000);
      } else {
        setLoginError(true);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setLoginError(true);
      setLoginSuccess(false);
    }
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submitForm,
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required('El email es obligatorio'),
      password: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('La contraseña es obligatoria'),
    }),
  });

  return { handleSubmit, handleChange, errors, loginError, loginSuccess, showPassword, togglePasswordVisibility };
};

export default useLoginForm;

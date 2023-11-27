import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterFormLogic = ({ onRegisterSuccess }) => {
  const emailPtrn = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passPtrn = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      password: '',
      confirmarPassword: '',
      terminos: false, // Agregar términos al estado inicial
    },
    onSubmit: (values) => {
      localStorage.setItem('userData', JSON.stringify({ email: values.email, password: values.password }));
      onRegisterSuccess();
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().trim().matches(/^[a-zA-Z]{2,}$/, 'Revise los datos, solo letras, mínimo dos.').required('Ingrese su nombre.'),
      apellido: Yup.string().trim().matches(/^[a-zA-Z]{2,}$/, 'Revise los datos, solo letras, mínimo dos.').required('Ingrese su apellido.'),
      email: Yup.string().trim().lowercase().matches(emailPtrn, 'Revise los datos, formato de email inválido.').required('Ingrese su email.'),
      telefono: Yup.string().trim().matches(/^[1-9]\d{9,}$/, 'Revise la cantidad de dígitos, sin 0 para área ni 15 para número.').required('Ingrese su teléfono.'),
      password: Yup.string().matches(passPtrn, 'Ingrese contraseña con al menos 8 caracteres, una letra, un número.').min(8, 'Ingrese al menos 8 caracteres').required('Ingrese una contraseña.'),
      confirmarPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Revise los datos, las contraseñas no coinciden.').required('Confirme la contraseña.'),
      terminos: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones.').required('Debe aceptar los términos y condiciones.'),
    }),
  });

  return { formik };
};

export default RegisterFormLogic;

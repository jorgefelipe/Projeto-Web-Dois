import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { Button } from 'components';
import { useFormik } from 'formik';
import * as yup from 'yup';

import userService from 'services/user';
import { setUserData } from 'store/user';
import { Text, TextError } from 'styles/styledComponents';

import { Container } from './styles';

const CampusLogin: React.FC = () => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(8, 'Mínimo de 8 caracteres'),
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      const user = await userService.userLogin(values);
      dispatch(setUserData(user.data.data.user));
      localStorage.setItem('@reactjsToken', user.data.data.token);
      history.push('/sitereact');
    } catch (err) {
      addToast(err.response.data.message, { appearance: 'error' });
    }
  };

  const { handleChange, values, errors, handleSubmit } = useFormik<{
    email: string;
    password: string;
  }>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <div className="name">
        <Text size="18px" align="left">
          E-mail
        </Text>
      </div>
      <input
        id="email"
        type="text"
        name="email"
        autoComplete="off"
        placeholder="Inserir seu e-mail"
        value={values.email}
        onChange={handleChange('email')}
      />
      {errors.email && <TextError>{errors.email}</TextError>}
      <div className="namee">
        <Text size="18px">Senha</Text>
      </div>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Inserir sua senha"
        value={values.password}
        onChange={handleChange('password')}
      />
      {errors.password && <TextError>{errors.password}</TextError>}
      { /* eslint-disable-next-line */}
      <p onClick={() => history.push('registre')}>Criar conta</p>
      <div className="botao">
        <Button label="Entrar" onPress={() => handleSubmit()} />
      </div>
    </Container>
  );
};

export default CampusLogin;

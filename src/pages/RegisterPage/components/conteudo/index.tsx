import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { Button } from 'components';
import { useFormik } from 'formik';
import * as yup from 'yup';

import userService from 'services/user';
import { Text, TextError } from 'styles/styledComponents';

import { Container } from './styles';

const CampusLogin: React.FC = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  const validationSchema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
    name: yup
      .string()
      .required('Campo obrigatório')
      .min(3, 'Mínimo de 3 caracteres'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'Mínimo de 6 caracteres'),
  });

  const onSubmit = async (values: {
    email: string;
    password: string;
    name: string;
  }) => {
    try {
      const resp = await userService.createUser(values);
      addToast(resp.data.message, { appearance: 'success' });
      history.goBack();
    } catch (err) {
      console.log(err);
      addToast(err.response.data.message, { appearance: 'error' });
    }
  };

  const { handleChange, values, errors, handleSubmit } = useFormik<{
    email: string;
    password: string;
    name: string;
  }>({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Text size="18px" align="left">
        Faça o seu cadastro
      </Text>

      <div className="namee">
        <Text size="18px">Nome</Text>
      </div>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Inserir seu nome"
        value={values.name}
        onChange={handleChange('name')}
      />
      {errors.name && <TextError>{errors.name}</TextError>}
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

      <div className="botao">
        <Button label="Criar Conta" onPress={() => handleSubmit()} />
      </div>
    </Container>
  );
};

export default CampusLogin;

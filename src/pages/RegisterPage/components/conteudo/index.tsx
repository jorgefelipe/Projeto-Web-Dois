import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'components';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { createUser } from 'services/user';
import { Text, TextError } from 'styles/styledComponents';

import { Container } from './styles';

const CampusLogin: React.FC = () => {
  const history = useHistory();

  const validationSchema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(6, 'Mínimo de 6 caracteres'),
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      const resp = await createUser({ ...values });
      localStorage.setItem('userToken', resp.data.token);
      alert('Cadastrado com sucesso!');
      history.replace('/sitereact');
    } catch (err) {
      console.log(err.message);
      alert(`Erro ao tentar cadastrar: ${err.message}`);
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
      <Text size="18px" align="left">
        Faça o seu cadastro
      </Text>
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

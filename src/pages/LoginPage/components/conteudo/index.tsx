import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'components';
import { useFormik } from 'formik';
import * as yup from 'yup';

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

  const onSubmit = (values: { email: string; password: string }) => {
    console.log(values);
    history.push('/sitereact');
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

      <p>Esqueceu sua senha?</p>

      <div className="botao">
        <Button label="Entrar" onPress={() => handleSubmit()} />
      </div>
    </Container>
  );
};

export default CampusLogin;

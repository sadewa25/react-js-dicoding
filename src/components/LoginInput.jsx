import React from 'react';
import PropTypes from 'prop-types';
import { strings } from '../utils/strings';
import { ErrorMessage } from '../atoms';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

function LoginInput({ login }) {
  
  const validationSchema = yup.object().shape({
    email: yup.string().email(strings.errors.invalidEmail).required(strings.errors.required),
    password: yup.string().required(strings.errors.required).min(7, strings.errors.minLength7),
  });

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    login(
      {
        email,
        password,
      },
    );
  };

  return (
    <form className="login-input" onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register('email')}  placeholder="Email" />
      {errors.email && <ErrorMessage message={errors.email.message} />}
      <input type="password" {...register('password')} placeholder="Password" />
      {errors.password && <ErrorMessage message={errors.password.message} />}
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;

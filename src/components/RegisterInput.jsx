import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useInput from '../hooks/useInput';
import { strings } from '../utils/strings';
import { ErrorMessage } from '../atoms';

function RegisterInput({ registerPage }) {
  const validationSchema = yup.object().shape({
    name: yup.string().required(strings.errors.required),
    email: yup.string().email(strings.errors.invalidEmail).required(strings.errors.required),
    password: yup.string().required(strings.errors.required).min(7, strings.errors.minLength7),
  });

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const { name, email, password } = data;
    registerPage(
      {
        name,
        email,
        password,
      },
    );
  };

  return (
    <form className="register-input" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} placeholder="Name" />
      {errors.name && <ErrorMessage message={errors.name.message} />}
      <input type="text" {...register('email')} placeholder="Email" />
      {errors.email && <ErrorMessage message={errors.email.message} />}
      <input type="password" {...register('password')} placeholder="Password" />
      {errors.password && <ErrorMessage message={errors.password.message} />}
      <button type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  registerPage: PropTypes.func.isRequired,
};

export default RegisterInput;

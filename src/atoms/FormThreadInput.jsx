import React from 'react'
import { strings } from '../utils/strings';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from './ErrorMessage';

function FormThreadInput({ formThread}) {
  const validationSchema = yup.object().shape({
    title: yup.string().required(strings.errors.required),
    body: yup.string().required(strings.errors.required),
  });

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const { title, body } = data;
    formThread(
      {
        title, body
      },
    );
  };

  return (
    <form className="register-input" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('title')} placeholder="Title" />
      {errors.title && <ErrorMessage message={errors.title.message} />}
      <input type="text" {...register('body')} placeholder="Body" />
      {errors.body && <ErrorMessage message={errors.body.message} />}
      <button type="submit">Simpan</button>
    </form>
  )
}

FormThreadInput.propTypes = {
  formThread: PropTypes.func.isRequired,
};

export default FormThreadInput
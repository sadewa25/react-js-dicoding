import React, { useState } from 'react';
import { strings } from '../utils/strings';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from './ErrorMessage';

function CommentInput({ addComment }) {
  
    const validationSchema = yup.object().shape({
        comment: yup.string().required(strings.errors.required),
    });

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        const { comment } = data;
        addComment(
            {
              comment
            },
        );
    };

  return (
    <form className="register-input" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('comment')} placeholder="Comment" />
      {errors.comment && <ErrorMessage message={errors.comment.message} />}
      <button type="submit">Simpan</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;

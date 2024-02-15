import React from 'react'
import { asyncAddThreads } from '../states/threads/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormThreadInput } from '../atoms';

function FormThreadPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({ title, body }) => {
    dispatch(asyncAddThreads({
      title, body
    }));

    navigate('/');
  };

  return (
    <section className="register-page">
      <div>
        <h2>Add New Thread</h2>
        <FormThreadInput formThread={onSubmit} />
      </div>
    </section>
  )
}

export default FormThreadPage
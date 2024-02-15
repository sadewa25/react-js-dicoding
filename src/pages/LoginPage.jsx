import React from 'react';
import { IoShareOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { LoadingBar } from 'react-redux-loading-bar';
import { asyncSetAuthUser } from '../states/authUser/action';
// 12345678, bowo@bowo.com

function LoginPage() {

  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({
      email,
      password,
    }));
  };

  return (
    <>
      <section className="login-page">
        <header className="login-page__hero">
          <h1><IoShareOutline /></h1>
        </header>
        <article className="login-page__main">
          <h2>
            Connect to
            {' '}
            <strong>The World</strong>
            ,
            {' '}
            <br />
            With Forum Space.
          </h2>

          <LoginInput login={onLogin} />
          <p>
            Don&apos;t have an account?
            {' '}
            <Link to="/register">Register</Link>
          </p>
        </article>
      </section>
    </>
  );
}

export default LoginPage;

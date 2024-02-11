import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetThreads } from '../states/threads/action';
import ThreadsList from '../components/ThreadsList';
import { BtnAdd } from '../atoms';

function HomePage() {
  const {
    threads = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetThreads())
  }, [dispatch]);

  const addThreads = () => {
    alert('oit');
  }

  return (
    <section className="home-page">
      <div style={{ marginTop: 24 }}>
        <BtnAdd messages={'Threads'} addAct={addThreads} />
      </div>
      <ThreadsList threads={threads} />
    </section>
  );
}

export default HomePage;

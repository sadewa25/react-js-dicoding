import React from 'react'
import PropTypes from 'prop-types';
import { ThreadItem } from '../atoms';
import { threadItemShape } from '../atoms/ThreadItem';
import { useNavigate } from 'react-router-dom';

function ThreadsList({threads}) {

  const navigate = useNavigate();

  const onClick = (thread) => {
    navigate(`/detail-thread/${thread.id}`) 
  }
    
  return (
    <div className="talks-list" style={{ marginTop: 30 }}>
      {
         threads.map((thread) => (
           <ThreadItem
            key={thread.id} {...thread} onClick={() => onClick(thread)} />
         ))
      }
    </div>
  )
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadsList
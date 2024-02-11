import React from 'react'
import PropTypes from 'prop-types';
import { ThreadItem } from '../atoms';
import { threadItemShape } from '../atoms/ThreadItem';

function ThreadsList({threads}) {
    
  return (
    <div className="talks-list" style={{ marginTop: 30 }}>
      {
         threads.map((thread) => (
           <ThreadItem
            key={thread.id} {...thread} />
         ))
      }
    </div>
  )
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};

export default ThreadsList
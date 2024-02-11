import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';
import ReactHtmlParser from 'html-react-parser';

function ThreadItem({
  id, title, body, createdAt, totalComments
}) {

  const navigate = useNavigate();

  return (
    <div role="button" tabIndex={0} className="talk-item">
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{title}</p>
            <p className="talk-item__user-id">
              @
              {id}
            </p>
          </div>

          <div>
            <p className="talk-item__created-at">{postedAt(createdAt)}</p>
            <p className="talk-item__created-at" style={{ color: 'red' }}>Komentar {totalComments}</p>
          </div>
        </header>
        <article>
          <div className="talk-item__text">{
            ReactHtmlParser(body.length > 150 ? body.substring(0, 150) + '...' : body)
          }</div>
        </article>
      </div>
    </div>
  );
}

const threadItemShape = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape
};

export { threadItemShape };

export default ThreadItem;

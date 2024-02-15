import React, { useEffect } from 'react'
import ReactHtmlParser from 'html-react-parser';
import { postedAt } from '../utils';
import { InformationThreadItem } from '../atoms';
import CommentInput from '../atoms/CommentInput';

function DetailInformationThread({ data, addComment }) {

  const onAddComment = (comment) => {
    addComment({
      comment
    })
  }

  return (
    <div>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p className="talk-item__user-name">{data.title}</p>
          </div>
          <div>
            <p className="talk-item__created-at">{postedAt(data.createdAt)}</p>
          </div>
        </header>
        <article>
          <div className="talk-item__text">{
            ReactHtmlParser(data.body ?? '')
          }</div>
        </article>
      </div>
      
      <div style={{ marginTop: 30 }}>
        <h3>Komentar</h3>
        <CommentInput addComment={onAddComment} />
        <div style={{ marginTop: 30 }}></div>
        {
          data.comments && (
            data.comments.map((c, index) =>
              (
                <InformationThreadItem item={c} index={index} key={index}/>
              )
            )
          )
        }
        
      </div>
    </div>
  )
}

export default DetailInformationThread
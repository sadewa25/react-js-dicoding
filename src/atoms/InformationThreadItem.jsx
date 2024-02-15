import React from 'react'
import { postedAt } from '../utils';
import ReactHtmlParser from 'html-react-parser';


function InformationThreadItem({item, index}) {
  return (
    <div className="talk-item__detail" key={index}>
        <header>
            <div className="talk-item__user-info">
            <p className="talk-item__user-name">{index+1} - {item.owner.name}</p>
            </div>
            <div>
            <p className="talk-item__created-at">{postedAt(item.createdAt) ?? ''}</p>
            </div>
        </header>
        <article>
            <div className="talk-item__text">{
            ReactHtmlParser(item.content ?? '')
            }</div>
        </article>
    </div>
  )
}

export default InformationThreadItem
import React from 'react';
import './cardContent.scss';

const CardContent = ({ user, username, date, content }) => {
  return (
    <div className="card-content">
      <div className="card-content__head">
        <p className="user">{user}</p>
        <p className="username">@{username}</p>
        <div className="delimiter"></div>
        <p className="date">{date}</p>
      </div>
      <p className="card-content__content">{content}</p>
    </div>
  );
}

export default CardContent;

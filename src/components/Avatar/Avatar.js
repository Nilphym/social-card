import React from 'react';
import './avatar.scss';

const Avatar = ({avatarImage}) => {
  return (
    <img className="avatar" src={avatarImage} alt="User's avatar" />
  );
}

export default Avatar;

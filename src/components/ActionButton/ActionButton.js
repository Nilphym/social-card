import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './actionButton.scss';

const ActionButton = ({ icon, text, color }) => {
  return (
    <div className="action">
      <FontAwesomeIcon style={{ color: color }} icon={icon} />
      <span style={{ color: color }}>{text}</span>
    </div>
  );
}

export default ActionButton;

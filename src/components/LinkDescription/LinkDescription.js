import React from 'react';
import './linkDescription.scss';

const extractHostnameFromLinkRef = (linkRef) => {
  return new URL(linkRef).hostname;
}

const LinkDescription = ({ linkTitle, linkDescription, linkRef }) => {
  return (
    <div className="link">
      <p className="link__title">{linkTitle}</p>
      <p className="link__description">{linkDescription}</p>
      <a href={linkRef} className="link__ref">{extractHostnameFromLinkRef(linkRef)}</a>
    </div>
  );
}

export default LinkDescription;

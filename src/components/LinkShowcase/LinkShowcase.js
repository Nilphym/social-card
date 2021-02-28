/* eslint-disable no-restricted-globals */
import React from 'react';
import LinkDescription from '../LinkDescription';
import './linkShowcase.scss';

const showcaseClickHandler = (linkRef) => {
  location.href = linkRef;
}

const LinkShowcase = ({ linkTitle, linkDescription, linkRef }) => {
  const cardImage = `https://dummyimage.com/600x400/000/fff.png&text=${linkTitle}`;
  const imageAltText = `The ${linkTitle} showcase image`;

  return (
    <div className="link-showcase">
      <img
        onClick={ () => showcaseClickHandler(linkRef) }
        className="link-showcase__image"
        src={cardImage}
        alt={imageAltText}
      />
      <LinkDescription
        linkTitle={linkTitle}
        linkDescription={linkDescription}
        linkRef={linkRef}
      />
    </div>
  );
}

export default LinkShowcase;

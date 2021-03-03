import React from 'react';
import LinkShowcase from '../LinkShowcase';
import CardContent from '../CardContent';
import Avatar from '../Avatar';
import ActionButton from '../ActionButton';
import SampleAvatar from '../../assets/ptaszor.jpg';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './card.scss';

const Card = () => {
  return (
    <div className="card">
      <Avatar className="card__avatar" avatarImage={SampleAvatar} />
      <LinkShowcase
        className="card__link-showcase"
        linkTitle="Learning React? Start Small."
        linkDescription="Can't pry yourself away from the tutorials? The cure is to make tiny little experiments apps."
        linkRef="https://github.com/Nilphym"
      />
      <CardContent
        className="card__card-content"
        user="Jędrzej Ratajczak"
        username="Nilphym"
        date="Mar 3"
        content="Learning React? Start Small.\n{author: @Nilphym}"
      />
      <div className="card__action-buttons">
        <ActionButton icon={faHome} text="pies" color="red" />
      </div>
    </div>
  );
}

export default Card;

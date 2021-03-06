import React from 'react';

import { LinkArrowIcon, NoteIcon } from '../icons/icons';

import './short-info-card.scss';

type ShortInfoCardType = {
  name: string;
  genre: string;
  link: string;
  src: string;
};

const ShortInfoCard = ({ name, genre, link, src }: ShortInfoCardType) => {
  return (
    <div style={{ backgroundImage: `url(${src})` }} className="short-info-card">
      <p className="name">{name}</p>
      <p className="genre">
        <NoteIcon />
        <span className="genre-label">{genre}</span>
      </p>
      <a href={link} className="link">
        Learn more <LinkArrowIcon />
      </a>
    </div>
  );
};

export default ShortInfoCard;

import React from 'react';
import { TicketsIcon, NoteIcon, CloseIcon, UahIcon } from '../icons/icons';

import './detailed-card-component.scss';

type DetailedCardComponentType = {
  data: string;
  name: string;
  genre: string;
  src: string;
  price: string;
};

export const DetailedCardComponent = ({
  data,
  name,
  genre,
  src,
  price,
}: DetailedCardComponentType) => {
  return (
    <div
      className="detailed-card-component"
      style={{ backgroundImage: `url(${src})` }}
    >
      <button className="close-btn">
        <CloseIcon />
      </button>
      <p className="data">{data}</p>
      <p className="name">{name}</p>
      <div className="bottom-block">
        <NoteIcon />
        <p className="genre">{genre}</p>
        <TicketsIcon />
        <p className="price">
          <UahIcon />
          {price}
        </p>
      </div>
    </div>
  );
};

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
}: DetailedCardComponentType) => (
  <div className="detailed-card-component-wrapper">
    <div
      className="detailed-card-component"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="overlay">
        <button className="close-btn">
          <CloseIcon />
        </button>
        <div className="info-block">
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
      </div>
    </div>
  </div>
);

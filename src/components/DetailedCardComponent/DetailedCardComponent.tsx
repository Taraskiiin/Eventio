import React from 'react';
import { TicketsIcon, NoteIcon, CloseIcon } from '../icons/icons';

type DetailedCardComponent = {
  data: string;
  name: string;
  genre: string;
  src: string;
  price: number;
};

export const DetailedCardComponent = ({
  data,
  name,
  genre,
  src,
  price,
}: DetailedCardComponent) => {
  <img
    className="detailed-card-component"
    src="https://image.freepik.com/free-photo/people-concert-with-smoke-overlay-texture_53876-126856.jpg"
    alt="image event"
  >
    <CloseIcon />
    <p className="data">FRIDAY AUG 24, 9PM</p>
    <p className="name">Brightlight Music Festival</p>
    <div className="bottom-block">
      <NoteIcon />
      <p className="genre"></p>
      <TicketsIcon />
      <p className="price"></p>
    </div>
  </img>;
};

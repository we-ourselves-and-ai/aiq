import { FC } from 'react';
import { CardProps } from './Card.types';
import './Card.css';

// TODO: Переделать на Typography

export const Card: FC<CardProps> = ({ imageLink, title, description, name }) => {
  return (
    <div className="aiq__card-wrapper">
      <div className="aiq__card-content">
        <img src={imageLink} alt="обложка статьи" className="aiq__card-image" />
        <h3 className="aiq__card-title">{title}</h3>
        <p className="aiq__card-description">{description}</p>
      </div>
      <p className="aiq__card-name">{name}</p>
    </div>
  );
};

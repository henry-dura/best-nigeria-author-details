import { useState } from 'react';
import AuthorDetails from './AuthorDetails';
import data from '../data/AuthorData';

const Card = () => {
  const [index, setIndex] = useState(0);
  const authorData = data[index];

  const checkIndex = (selectedIndex) => {
    if (selectedIndex >= data.length) {
      return 0;
    } if (selectedIndex < 0) {
      return data.length - 1;
    }
    return selectedIndex;
  };

  const moveLeft = () => {
    setIndex((current) => checkIndex(current + 1));
  };

  const moveRight = () => {
    setIndex((current) => checkIndex(current - 1));
  };
  
  const randomAuthor = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index) {
      randomIndex = checkIndex(randomIndex + 1);
    }
    setIndex(randomIndex);
  };
  return (
    <>
      <div className="card">
        <AuthorDetails
          authorData={authorData}
          moveLeft={moveLeft}
          moveRight={moveRight}
          randomAuthor={randomAuthor}
        />
      </div>
    </>
  );
};

export default Card;

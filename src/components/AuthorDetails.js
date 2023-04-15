import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState } from 'react';
import data from '../data/AuthorData';

const AuthorDetails = () => {
  const [index, setIndex] = useState(0);
  const { name, biography, pix } = data[index];
  return (
    <section className="card-content">
      <div className="pix"><img src={pix} alt={name} /></div>
      <h2>{name}</h2>
      <p className="bio">{biography}</p>
      <div className="arrows">
        <div className="arrow"><MdOutlineArrowBackIosNew onClick={() => setIndex((current) => current - 1)} /></div>
        <div className="arrow"><MdOutlineArrowForwardIos onClick={() => setIndex((current) => current + 1)} /></div>
      </div>

    </section>
  );
};

export default AuthorDetails;

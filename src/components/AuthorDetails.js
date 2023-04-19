import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useState } from 'react';
import PropTypes from 'prop-types';

const AuthorDetails = ({
  authorData, moveLeft, moveRight, randomAuthor,
}) => {
  const { name, pix, biography } = authorData;

  const [show, setShow] = useState(false);
  return (
    <section className="card-content">

      <div className="arrows">
        <div className="arrow"><MdOutlineArrowBackIosNew onClick={moveRight} /></div>
        <div className="pix"><img src={pix} alt={name} /></div>
        <div className="arrow"><MdOutlineArrowForwardIos onClick={moveLeft} /></div>
      </div>
      <h2 className="name">{name}</h2>
      <p className="bio">
        {show ? biography : `${biography.substring(0, 100)}.....`}
        <button type="button" className="show" onClick={() => setShow(!show)}>{show ? 'Show Less' : 'Read More'}</button>
      </p>

      <button type="button" className="random" onClick={randomAuthor}>Show Random Author</button>

    </section>
  );
};

AuthorDetails.propTypes = {
  authorData: PropTypes.objectOf(PropTypes.string).isRequired,
  moveLeft: PropTypes.func.isRequired,
  moveRight: PropTypes.func.isRequired,
  randomAuthor: PropTypes.func.isRequired,
};

export default AuthorDetails;

// import React from 'react'
import PropTypes from 'prop-types';

const ExperienceInfo = ({number, text}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightgrey uppercase -mt-4">{text}</p>
    </div>
  );
};
ExperienceInfo.propTypes = {
  number: PropTypes.node.isRequired, 
  text: PropTypes.string.isRequired  // Jika `text` berupa string
};

export default ExperienceInfo;

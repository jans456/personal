// import React from 'react';
import PropTypes from 'prop-types';

const SingleSkill = ({ imgSvg, text}) => {
  return (
  <div className="hover:-translate-y-10 transition-all duration-500">
    <div className="flex flex-col items-center gap-2 relative">
      <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkgrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-yellow">
        {imgSvg}</div>
      <p>{text}</p>
    </div>
    <div className="w-[100px] h-[200px] bg-yellow absolute top-[50px] -z-10"></div>
  </div>
  );
};
SingleSkill.propTypes = {
  imgSvg: PropTypes.node.isRequired, // Jika `imgSvg` adalah elemen React (SVG atau ikon)
  text: PropTypes.string.isRequired  // Jika `text` berupa string
};

export default SingleSkill;

// import React from 'react'

import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopRight from "./ExperienceTopRight";
import ExperienceTopMiddle from "./ExperineceTopMiddle";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;

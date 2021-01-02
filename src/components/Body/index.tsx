import React, { FC } from 'react';
import { Body as BodyProps } from '../../data';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import ExtraMile from './ExtraMile';
import Interests from './Interests';



const Body: FC<BodyProps> = ({ skills, experiences, educations, extraMiles, interests }) => (
  <main className="main">
    <div className="container">
      <div className="collumn small">
        <Skills {...skills} />
      </div>
      <div className="collumn large">
        <Experience data={experiences} />
      </div>
      <div className="collumn large">
        <Education data={educations} />
        <ExtraMile data={extraMiles} />
        <Interests data={interests} />
        <hr className="final-break" />
      </div>
    </div>
  </main>
);

export default Body

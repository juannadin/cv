import React, { FC } from 'react';
import { Body as BodyProps } from '../../data';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Interests from './Interests';



const Body: FC<BodyProps> = ({ skills, experiences, educations, interests }) => (
  <main>
    <Skills {...skills} />
    <Experience data={experiences} />
    <Education data={educations} />
    <Interests data={interests} />
  </main>
);

export default Body

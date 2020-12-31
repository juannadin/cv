import React, { FC } from 'react';
import { Experiences } from '../../../data';

type ExperienceProps = {
  data: Experiences;
}

const Experience: FC<ExperienceProps> = ({ data }) => (
  <article>
    <h3>Experience</h3>
        {data.map((education) => (
      <div>
        <h4>{education.company}</h4>
        <span>{education.startDate} to {education.endDate}</span>
        <h5>{education.title}</h5>
        <p>{education.description}</p>
      </div>
    ))}
  </article>
);

export default Experience;

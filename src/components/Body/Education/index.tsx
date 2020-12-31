import React, { FC } from 'react';
import { Educations } from '../../../data';

type EducationProps = {
  data: Educations;
};

const Education: FC<EducationProps> = ({ data }) => (
  <article>
    <h3>Education</h3>
    {data.map((education) => (
      <div>
        <h4>{education.title}</h4>
        <span>{education.startDate} to {education.endDate}</span>
        <h5>{education.institution}</h5>
        <p>{education.degree}</p>
      </div>
    ))}
  </article>
);

export default Education;

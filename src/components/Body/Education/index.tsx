import React, { FC } from 'react';
import { Educations } from '../../../data';

type EducationProps = {
  data: Educations;
};

const Education: FC<EducationProps> = ({ data }) => (
  <article>
    {data.map((education) => (
      <div>
        <h3>{education.title}</h3>
        <span>{education.startDate} to {education.endDate}</span>
        <h4>{education.institution}</h4>
        <p>{education.degree}</p>
      </div>
    ))}
  </article>
);

export default Education;

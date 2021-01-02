import React, { FC } from 'react';
import { Educations } from '../../../data';
import Section from '../Section';

type EducationProps = {
  data: Educations;
};

const Education: FC<EducationProps> = ({ data }) => (
  <Section className="educations" title="Education">
    {data.map((education, key) => (
      <div className="education" key={key}>
        <h4 className="education__title">{education.title}</h4>
        <span className="education__date-range">{education.startDate} to {education.endDate}</span>
        <h5 className="education__institution">{education.institution}</h5>
        <p className="education__degree">{education.degree}</p>
      </div>
    ))}
  </Section>
);

export default Education;

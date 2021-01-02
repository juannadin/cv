import React, { FC } from 'react';
import { Experiences } from '../../../data';
import Section from '../Section';

type ExperienceProps = {
  data: Experiences;
}

const Experience: FC<ExperienceProps> = ({ data }) => (
  <Section className="experiences" title="Experience">
    {data.map((experience, key) => (
      <div className="experience" key={key}>
        <h4 className="experience__company">{experience.company}</h4>
        <span className="experience__date-range">{experience.startDate} to {experience.endDate}</span>
        <h5 className="experience__job-title">{experience.title}</h5>
        <p className="experience__description">{experience.description}</p>
      </div>
    ))}
  </Section>
);

export default Experience;

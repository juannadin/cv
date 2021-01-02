import React, { FC } from 'react';
import { Interests as InterestData } from '../../../data';
import Section from '../Section';

type InterestsProps = {
  data: InterestData;
}

const Interests: FC<InterestsProps> = ({ data }) => (
  <Section className="interests" title="Interests & Hobbies">
    <ul className="interests-list">
      {data.map((interest, key) => (
        <li className="interests-list__item" key={key}>{interest}</li>
      ))}
    </ul>
  </Section>
);

export default Interests;

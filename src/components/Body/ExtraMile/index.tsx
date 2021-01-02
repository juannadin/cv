import React, { FC } from 'react';
import { ExtraMiles } from '../../../data';
import Section from '../Section';

type ExtraMileProps = {
  data: ExtraMiles;
}

const ExtraMile: FC<ExtraMileProps> = ({ data }) => (
  <Section className="extra-mile-skills" title="Extra Mile skills">
    <ul className="extra-mile-skills-list">
      {data.map((extraMile, key) => (
        <li className="extra-mile-skills-list__item" key={key}>{extraMile}</li>
      ))}
    </ul>
  </Section>
);

export default ExtraMile;

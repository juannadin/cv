import React, { FC } from 'react';
import Section from '../Section';
import SkillLevelBar from './SkillLevelBar';
import { Skills as SkillsProps } from '../../../data';

const Skills: FC<SkillsProps> = ({ soft, technical, languajes }) => (
  <article className="skills">
    <Section className="soft" title="Soft skills">
      <ul className="skills-list">
        {soft.map((softSkill, key) => (
          <li className="skill" key={key}>
            <h5 className="skill__title">{softSkill.name}</h5>
            <SkillLevelBar level={softSkill.ammount} />
          </li>
          ))}
      </ul>
    </Section>
    <Section className="tech" title="Technical skills">
      <ul className="skills-list">
        {technical.map((techSkill, key) => (
          <li className="skill" key={key}>
            <h5 className="skill__title">{techSkill.name}</h5>
            <SkillLevelBar level={techSkill.ammount} />
          </li>
          ))}
      </ul>
    </Section>
    <Section className="lang" title="Languajes">
        <ul className="skills-list">
          {languajes.map((languaje, key) => (
          <li className="skill" key={key}>
            <h5 className="skill__title">{languaje.name}</h5>
            <SkillLevelBar level={languaje.ammount} />
          </li>
          ))}
        </ul>
    </Section>
  </article> 
);

export default Skills;

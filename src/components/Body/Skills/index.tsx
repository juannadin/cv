import React, { FC } from 'react';
import { Skills as SkillsProps } from '../../../data';

const Skills: FC<SkillsProps> = ({ soft, technical, languajes }) => (
  <article>
    <ul>
      <h3>Soft Skills</h3>
      {soft.map((softSkill) => (
        <li>{softSkill.name}, {softSkill.ammount}</li>
      ))}
    </ul>
    <ul>
      <h3>Technical Skills</h3>
      {technical.map((techSkill) => (
        <li>{techSkill.name}, {techSkill.ammount}</li>
      ))}
    </ul>
    <ul>
      <h3>Languajes</h3>
      {languajes.map((languaje) => (
        <li>{languaje.name}, {languaje.ammount}</li>
      ))}
    </ul>
  </article>
);

export default Skills;

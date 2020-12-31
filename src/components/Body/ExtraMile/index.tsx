import React, { FC } from 'react';
import { ExtraMiles } from '../../../data';

type ExtraMileProps = {
  data: ExtraMiles;
}

const ExtraMile: FC<ExtraMileProps> = ({ data }) => (
  <article>
    <h3>Extra Mile Skills</h3>
    <ul>
      {data.map((extraMile) => (
        <li>{extraMile}</li>
      ))}
    </ul>
  </article>
);

export default ExtraMile;

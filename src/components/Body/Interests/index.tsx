import React, { FC } from 'react';
import { Interests as InterestData } from '../../../data';

type InterestsProps = {
  data: InterestData;
}

const Interests: FC<InterestsProps> = ({ data }) => (
  <article>
    <h3>Interests and Hobbies</h3>
    <ul>
      {data.map((interest) => (
        <li>{interest}</li>
      ))}
    </ul>
  </article>
);

export default Interests;

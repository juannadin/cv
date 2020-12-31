import React, { FC } from 'react';
import { Header as HeaderProps } from '../../data';

const Header: FC<HeaderProps> = ({ title, subtitle, about, motto, personalInfo }) => (
  <header className="header">
    <h1 className="header--title">{title}</h1>
    <h2 className="header--subtitle">{subtitle}</h2>
    <p className="header--about">{about}</p>
    <p className="header--motto">{motto}</p>
    <address>
      <ul className="header--personal-info">
        {personalInfo.map((element) => (
          <li><strong>{element.type}</strong> {element.value}</li>
        ))}
      </ul>
    </address>
  </header>
);

export default Header;

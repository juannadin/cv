import React, { FC } from 'react';
import { Header as HeaderProps } from '../../data';
import { PersonalInfo, PersonalInfoType } from '../../data';

const getLink = (element: PersonalInfo) => {
  const cases = {
    [PersonalInfoType.ADDRESS]: 'https://goo.gl/maps/1iYrzpWL5EnDp2GT7',
    [PersonalInfoType.EMAIL]: `mailto:${element.value}`,
    [PersonalInfoType.CELLPHONE]: `tel:${element.value}`,
  };

  return cases[element.type];
}

const Header: FC<HeaderProps> = ({ title, subtitle, about, motto, personalInfo }) => (
  <header className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      <h2 className="header__subtitle">{subtitle}</h2>
      <p className="header__about">{about}</p>
      <p className="header__motto">{motto}</p>
      <address className="header__info">
        <ul className="header__personal-info">
          {personalInfo.map((element, key) => {
            const link = getLink(element);
            return(
              <li className="personal-info-item" key={key}>
                <strong className="personal-info-item__type">{element.type}</strong>
                <a className="personal-info-item__link" href={link} target="_blank" rel="noreferrer">
                  {element.value}
                </a>
              </li>)
          })}
        </ul>
      </address>
    </div>
  </header>
);

export default Header;

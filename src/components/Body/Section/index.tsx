import React, { FC } from 'react';
import classNames from 'classnames';

type SectionProps = {
  className: string;
  title: string;
};

const Section: FC<SectionProps> = ({ children, className = '', title }) => {
  const sectionClass = classNames('section', className);
  return (<article className={sectionClass}>
    <h3 className="section__title">{title}</h3>
    {children}
  </article>)
};

export default Section;

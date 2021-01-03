import React, { FC } from 'react';
import { Footer as FooterProps } from '../../data';

const Footer: FC<FooterProps> = ({ links }) => (
  <footer className="footer">
    <div className="container">
      <ul className="footer-links">
        {links.map((link, key) => (
          <li className="footer-links__item" key={key}>
            <a  className="footer-links__link" href={link.url} target="_blank" rel="noreferrer">[ {link.name} ]</a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
